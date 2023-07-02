import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  min-height: 100vh;
  /* background-color: #f0e6d2; */
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const MemberList = styled.div`
  background-color: #ffffff;
  width: 20%;
  border: 1px solid black;
`;

export const Member = styled.li`
  list-style-type: none;
  padding-left: 0;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #88b04b;
    color: #ffffff;
  }
`;

export const ChatContent = styled.div`
  background-color: #f5f7f6;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #b1c6d9;
`;

export const ChatMessages = styled.ul`
  list-style-type: none;
  padding: 15px;
  margin: 0;
`;

export const Message = styled.li`
  display: flex;
  justify-content: ${(props) => (props.self ? "flex-end" : "flex-start")};
  padding-bottom: 10px;
`;

export const Avatar = styled.div`
  background-color: #88b04b;
  padding: 5px 10px;
  border-radius: 50%;
  font-weight: bold;
  color: white;
`;

export const MessageData = styled.div`
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-left: ${(props) => (props.self ? "7px" : "10px")};
  margin-right: ${(props) => (props.self ? "10px" : "7px")};
`;

export const SendBtn = styled.div`
  display: flex;
  padding: 15px;
  background-color: #f5f7f6;
`;

export const InputMessage = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

export const SendButton = styled.button`
  padding: 5px 10px;
  background-color: #88b04b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
`;

export const Search = styled.div`
  display: flex;
  padding: 15px;
  background-color: #fff;
  height: 100px;
`;

export const InputSearch = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #88b04b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const UserNameInput = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  outline: none;
  margin-bottom: 10px;
  background-color: black;
`;

export const ConnectButton = styled.button`
  padding: 5px 10px;
  background-color: #88b04b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
`;

export const AvatarSelf = styled.div`
  width: 500px;
`;
