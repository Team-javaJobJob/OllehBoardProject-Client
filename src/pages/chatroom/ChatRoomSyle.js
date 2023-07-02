import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Register = styled.div`
  position: fixed;
  padding: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  top: 35%;
  left: 32%;
  display: flex;
  flex-direction: row;
`;

export const ChatBoxDiv = styled.div`
  margin: 40px 50px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #fff;
`;

export const MemberList = styled.div`
  width: 15%;
  background-color: #f5f5f5;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 2;
`;

export const Member = styled.li`
  padding: 10px;
  background: #eee;
  border: #000;
  cursor: pointer;
  margin: 5px 2px;
  box-shadow: 0 8px 8px -4px #999999;

  &.active {
    background: blueviolet;
    color: #fff;
  }

  &:hover {
    background: grey;
    color: #fff;
  }
`;

export const ChatContent = styled.div`
  width: 90%;
  margin-left: 10px;
  background-color: #9fc0d7;
`;

export const ChatMessages = styled.ul`
  height: 100%;
  border: 1px solid #000;
`;

export const SendMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const InputMessage = styled.input`
  padding: 0.5rem;
  width: 90%;
  border-radius: 50px;
`;

export const chatUl = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ChatTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`;

export const SendButton = styled.button`
  width: 10%;
  border-radius: 50px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Avatar = styled.div`
  background-color: cornflowerblue;
  padding: 3px 5px;
  border-radius: 5px;
  color: #fff;
`;

export const AvatarSelf = styled.div`
  color: #000;
`;

// export const Message = styled.li`
//   padding: 5px;
//   width: auto;
//   display: flex;
//   flex-direction: row;
//   box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
//   margin: 5px 10px;
// `;

export const Message = styled.li`
  padding: 5px;
  width: auto;
  display: flex;
  flex-direction: row;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 5px 10px;

  ${(props) =>
    props.self &&
    `
    justify-content: end;
  `}
`;

export const chatcontent = styled.div`
  width: 150%;
  margin-left: 10px;
`;

export const messageslef = styled.div`
  justify-content: end;
`;

export const MessageData = styled.div`
  padding: 5px;
  background-color: #edd801;
`;

export const MemberListBox = styled.div`
  background-color: yellow;
  display: flex;
  z-index: 0;
  overflow: hidden;
`;
