import styled from "styled-components";

export const ArticleDetail = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 2rem;
  margin: auto;
  padding: 10px;
  height: 80vh;
  width: 50vw;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CommunityName = styled.h1`
  margin: 3rem;
  font-size: 1.5rem;
`;

export const InfoCommunity = styled.p`
  margin: 0 2rem;
  font-weight: 700;
  font-size: 1.2rem;
  width: 80%;
`;

export const DateCommunity = styled.div``;
export const NickName = styled.h3`
  margin: 0 2rem;
  font-size: 2rem;
  color: #112;
`;

export const ChatBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 5rem;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const MapContainer = styled.div`
  display: block;
  width: 80%;
  height: 300px;
  margin: auto;
`;

export const InputContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 2rem;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin: 2rem;
`;

export const OllehCtnAndChatBtn = styled.div`
  display: flex;
`;

export const DetailName = styled.label`
  font-size: 1.5rem;
  font-weight: 300;
`;
