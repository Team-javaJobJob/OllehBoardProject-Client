import styled from "styled-components";

export const BoardListBox = styled.div`
  width: 100%;
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 1.25rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;

  h2 {
    font-weight: bold;
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
    display: inline;
  }

  span {
    font-size: 0.875rem;
    font-weight: normal;
    margin-left: 0.5rem;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const BoardCreateButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #bf94e4;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 1rem;

  :hover {
    opacity: 0.6;
  }
`;

export const DetailWrapper = styled.div`
  padding: 1rem;
`;

export const DetailHeader = styled.div`
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const DetailTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin: 1rem 0;
`;

export const DetailNickName = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const DetailTime = styled.span`
  font-size: 1rem;
  font-weight: normal;
  color: #a9a9a9;
  margin-left: 0.5rem;
`;

export const AuthorAndActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoardButton = styled.button`
  padding: 0.5rem;
  background-color: #bf94e4;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-right: 0.5rem;
  :hover {
    opacity: 0.6;
  }
`;

export const DetailContent = styled.div`
  max-width: 85%;
  margin: auto;
  margin-bottom: 5rem;
`;

export const BoardFormContainer = styled.section`
  max-width: 90%;
  margin: auto;
`;

export const BoardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoardInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const BoardLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BoardTextarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 25vh;
  &:focus {
    outline: none;
    border-color: #666;
  }
`;
