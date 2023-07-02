import styled from "styled-components";

export const MypageContainer = styled.section`
  width: 90%;
  margin: auto;
  position: relative;
`;

export const MyInfoLayout = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;

  h1 {
    display: inline-block;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      #bf94e4 50%
    );
    margin-bottom: 0.5rem;
  }
  p {
    color: #808080;
    margin-bottom: 3rem;
  }
`;

export const MyActivityLayOut = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
`;

export const LineContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid #b5b5b5;
`;

export const MyInfoBox = styled.div`
  width: 50%;
  margin: auto;
  padding: 4rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

export const MyInfoName = styled.h2`
  margin-bottom: 1em;
  color: #635f5f;
`;

export const MyInfoNickname = styled.h3`
  margin-bottom: 1em;
  font-size: 1em;
  color: #948e8e;
  text-align: left;
`;
export const MyInfoButton = styled.button`
  padding: 0.5rem 2rem;
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

export const MyActivityButton = styled.button`
  background-color: transparent;
  padding: 0 3rem;
  border: none;
  font-size: 1.1em;
  font-weight: 600;
  color: #635f5f;

  &.active,
  &:focus {
    color: #bf94e4;
    position: relative;
    font-weight: 900;
    outline: none;
  }
`;

export const ArticleList = styled.article`
  width: 70%;
  min-height: 200px;
  padding: 1rem;
  margin: 0 auto 0.5rem;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  background-color: #f2f2f2;
`;
