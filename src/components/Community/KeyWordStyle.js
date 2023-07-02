import styled from "styled-components";

export const SearchingBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchingInput = styled.input`
  height: 30px;
  width: 250px;
  padding: 1em;
  margin-right: 1em;
  border-radius: 50px;
`;

export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
