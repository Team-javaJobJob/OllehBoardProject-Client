import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkTitle = styled(Link)`
  margin-right: 20px;
  font-size: 30px;
  font-weight: bold;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  width: 200px;

  @media (max-width: 767px) {
    width: 150px;
  }

  @media (max-width: 575px) {
    width: 50px;
  }
`;

export const RightLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredLink = styled(Link)`
  margin-right: 8px;
  text-align: center;
`;

export const LogoutButton = styled(Link)`
  margin-right: 8px;
  text-align: center;
  background-color: inherit;
  border: none;
`;
