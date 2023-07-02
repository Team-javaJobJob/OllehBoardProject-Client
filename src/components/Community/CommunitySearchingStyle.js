import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 50px;
  display: flex;
  background-color: #bf94e4;
  color: white;
  margin: 5px auto;
  width: 6em;
  height: 3em;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const BtnSpan = styled.span`
  position: relative;
  z-index: 1;
`;
