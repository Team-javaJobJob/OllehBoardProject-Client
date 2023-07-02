import styled from "styled-components";

export const CommunityLayout = styled.section`
  width: 100vw;
  margin-top: 100px;
`;

export const Navbar = styled.div`
  width: 100vw;
  color: purple;
  background-color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: "2rem";
  justify-content: space-around;
  padding: 0px 10px 5px 5px;
`;

export const ImageList = styled.li`
  width: calc(100vw / 4);
  box-sizing: border-box;
  justify-content: space-around;
  margin: 5% auto;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
`;

export const Nickname = styled.div`
  font-size: 1.6rem;
`;

export const OllehCtn = styled.h3`
  font-size: 100%;
`;

export const Region = styled.h3``;

export const Info = styled.h3``;
