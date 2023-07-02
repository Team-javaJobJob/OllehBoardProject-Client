import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useSelector } from "react-redux";
import axios from "axios";
import { getToken } from "../../tokenUtils";
import { useParams } from "react-router-dom";
import {
  Avatar,
  AvatarSelf,
  ChatBoxDiv,
  ChatContent,
  ChatMessages,
  ChatTitle,
  Container,
  InputMessage,
  Member,
  MemberList,
  Message,
  MessageData,
  Register,
  SendButton,
  SendMessage,
} from "./ChatRoomSyle";

var stompClient = null;
const ChatRoom = () => {
  const { communityId } = useParams();
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [members, setMembers] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });

  const getMyinfo = async () => {
    const response = await axios.get("/api/v1/members/myInfo", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    setUserData({ ...userData, username: response.data.nickName });
  };

  useEffect(() => getMyinfo(), []);
  useEffect(() => {
    if (userData.username === "" || userData.connected) return;
    console.log(userData);
    connect();
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/list", onMemberListReceived);
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    // stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      communityId: communityId,
      status: "JOIN",
      message: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    stompClient.send("/app/list", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        // 메세지 출력 조건이 복잡해서 일단 제외...
        // if(communityId == payloadData.communityId && payloadData.senderName !== userData.username &&
        //   members.indexOf(payloadData.senderName) < 0
        // ) {
        //   console.log(members, payloadData.senderName)
        //   console.log(members.indexOf(payloadData.senderName))
        //   payloadData.message = payloadData.senderName + "님이 입장하셨습니다.";
        //   payloadData.senderName = "SYSTEM";
        //   publicChats.push(payloadData);
        //   setPublicChats([...publicChats]);
        // }
        //onPrivateMessage(payload)
        stompClient.send(
          "/app/list",
          {},
          JSON.stringify({ communityId: communityId })
        );
        break;
      case "MESSAGE":
        if (payloadData.communityId != communityId) return;
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onMemberListReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    if (payloadData.communityId != communityId) return;
    const members = payloadData.message.split(",");
    setMembers(members);
  };

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
        communityId: communityId,
      };

      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };

  const registerUser = () => {
    connect();
  };

  return (
    <Container>
      {userData.connected ? (
        <ChatBoxDiv>
          <MemberList>
            <chatUl>
              <li
                onClick={() => {
                  setTab("CHATROOM");
                }}
                className={`member ${tab === "CHATROOM" && "active"}`}
              >
                <ChatTitle>Chatroom</ChatTitle>
              </li>
              {[...members].map((member) => (
                <Member>{member}</Member>
              ))}
              {/*{[...privateChats.keys()].map((name,index)=>(*/}
              {/*    <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>*/}
              {/*))}*/}
            </chatUl>
          </MemberList>
          {tab === "CHATROOM" && (
            <ChatContent>
              <ChatMessages>
                {publicChats.map((chat, index) => (
                  <Message
                    self={chat.senderName === userData.username}
                    key={index}
                  >
                    {chat.senderName !== userData.username && (
                      <Avatar>{chat.senderName}</Avatar>
                    )}
                    <MessageData>{chat.message}</MessageData>
                    {chat.senderName === userData.username && (
                      <AvatarSelf>{chat.senderName}</AvatarSelf>
                    )}
                  </Message>
                ))}
              </ChatMessages>

              <SendMessage>
                <InputMessage
                  type="text"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                />
                <SendButton onClick={sendValue}>send</SendButton>
              </SendMessage>
            </ChatContent>
          )}
          {tab !== "CHATROOM" && (
            <ChatContent>
              <ChatMessages>
                {[...privateChats.get(tab)].map((chat, index) => (
                  <Message
                    self={chat.senderName === userData.username}
                    key={index}
                  >
                    {chat.senderName !== userData.username && (
                      <Avatar>{chat.senderName}</Avatar>
                    )}
                    <MessageData>{chat.message}</MessageData>
                    {chat.senderName === userData.username && (
                      <AvatarSelf>{chat.senderName}</AvatarSelf>
                    )}
                  </Message>
                ))}
              </ChatMessages>

              <SendMessage>
                <InputMessage
                  type="text"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                />
                <SendButton type="button" onClick={sendPrivateValue}>
                  send
                </SendButton>
              </SendMessage>
            </ChatContent>
          )}
        </ChatBoxDiv>
      ) : (
        <Register>
          {/*<input*/}
          {/*    id="user-name"*/}
          {/*    placeholder="Enter your name"*/}
          {/*    name="userName"*/}
          {/*    value={userData.username}*/}
          {/*    onChange={handleUsername}*/}
          {/*    margin="normal"*/}
          {/*/>*/}
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </Register>
      )}
    </Container>

    // <div className="container">
    //   {userData.connected ? (
    //     <div className="chat-box">
    //       <div className="member-list">
    //         <ul>
    //           <li
    //             onClick={() => {
    //               setTab("CHATROOM");
    //             }}
    //             className={`member ${tab === "CHATROOM" && "active"}`}
    //           >
    //             Chatroom
    //           </li>
    //           {[...members].map((member) => (
    //             <li className={`member`}>{member}</li>
    //           ))}
    //           {/*{[...privateChats.keys()].map((name,index)=>(*/}
    //           {/*    <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{name}</li>*/}
    //           {/*))}*/}
    //         </ul>
    //       </div>
    //       {tab === "CHATROOM" && (
    //         <div className="chat-content">
    //           <ul className="chat-messages">
    //             {publicChats.map((chat, index) => (
    //               <li
    //                 className={`message ${
    //                   chat.senderName === userData.username && "self"
    //                 }`}
    //                 key={index}
    //               >
    //                 {chat.senderName !== userData.username && (
    //                   <div className="avatar">{chat.senderName}</div>
    //                 )}
    //                 <div className="message-data">{chat.message}</div>
    //                 {chat.senderName === userData.username && (
    //                   <div className="avatar self">{chat.senderName}</div>
    //                 )}
    //               </li>
    //             ))}
    //           </ul>

    //           <div className="send-message">
    //             <input
    //               type="text"
    //               className="input-message"
    //               placeholder="enter the message"
    //               value={userData.message}
    //               onChange={handleMessage}
    //             />
    //             <button
    //               type="button"
    //               className="send-button"
    //               onClick={sendValue}
    //             >
    //               send
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //       {tab !== "CHATROOM" && (
    //         <div className="chat-content">
    //           <ul className="chat-messages">
    //             {[...privateChats.get(tab)].map((chat, index) => (
    //               <li
    //                 className={`message ${
    //                   chat.senderName === userData.username && "self"
    //                 }`}
    //                 key={index}
    //               >
    //                 {chat.senderName !== userData.username && (
    //                   <div className="avatar">{chat.senderName}</div>
    //                 )}
    //                 <div className="message-data">{chat.message}</div>
    //                 {chat.senderName === userData.username && (
    //                   <div className="avatar self">{chat.senderName}</div>
    //                 )}
    //               </li>
    //             ))}
    //           </ul>

    //           <div className="send-message">
    //             <input
    //               type="text"
    //               className="input-message"
    //               placeholder="enter the message"
    //               value={userData.message}
    //               onChange={handleMessage}
    //             />
    //             <button
    //               type="button"
    //               className="send-button"
    //               onClick={sendPrivateValue}
    //             >
    //               send
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   ) : (
    //     <div className="register">
    //       {/*<input*/}
    //       {/*    id="user-name"*/}
    //       {/*    placeholder="Enter your name"*/}
    //       {/*    name="userName"*/}
    //       {/*    value={userData.username}*/}
    //       {/*    onChange={handleUsername}*/}
    //       {/*    margin="normal"*/}
    //       {/*/>*/}
    //       <button type="button" onClick={registerUser}>
    //         connect
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default ChatRoom;
