import styled from "styled-components";

export const ArticleDetail = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CommunityName = styled.h1`
  margin: 1.5rem 0;
  font-size: 1.5rem;
`;

export const InfoCommunity = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  width: 80%;
`;

export const DateCommunity = styled.div``;
export const NickName = styled.h3`
  font-size: 2rem;
  color: #112;
`;

export const ChatBtn = styled.button`
  border: none;
  border-radius: 50px;
  background-color: #a86eea;
  width: 18em;
  height: 3em;
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
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
  width: 100%;
  height: 300px;
  margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
