import styled from "styled-components";

export const CommentSection = styled.section`
  max-width: 85%;
  margin: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 150px;
  margin: 2rem;
  resize: none;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 1em;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const CommentButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 2em;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f6cef5;
  border: none;
`;

export const CommentLists = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
`;

export const InfoContainer = styled.div``;

export const MemberName = styled.p`
  margin-bottom: 0.5em;
  font-weight: bold;
  font-size: 1rem;
`;

export const Content = styled.p``;

export const Replytextarea = styled.textarea`
  width: 80%;
  height: 10vh;
  margin: 1rem;
  resize: none;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.5em;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const EditButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0 0.5em;
  color: blue;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const ReplyButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5em;
  color: gray;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const ReplyLists = styled.div`
  max-width: 70%;
  margin: auto;
`;
