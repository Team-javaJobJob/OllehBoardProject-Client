import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slice/userSlice";
import {
  Container,
  LeftContainer,
  LinkTitle,
  RightLink,
  CenteredLink,
  Logo,
} from "./NavbarStyle";

export default function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <Container>
      <LeftContainer>
        <LinkTitle to="/">
          <Logo src={require("../../../HomeStyleImg/logo.png")} alt="../" />
        </LinkTitle>
        <CenteredLink to="/api/v1/post/list">게시판</CenteredLink>
      </LeftContainer>

      <RightLink>
        {token ? (
          <>
            <CenteredLink to="/api/v1/community">커뮤니티 생성</CenteredLink>
            <CenteredLink to="/api/v1/myPage">My page</CenteredLink>
            <CenteredLink to="/" onClick={handleLogout}>
              로그아웃
            </CenteredLink>
          </>
        ) : (
          <>
            <CenteredLink to="/api/v1/members/login">로그인</CenteredLink>
            <CenteredLink to="/api/v1/members/join">회원가입</CenteredLink>
          </>
        )}
      </RightLink>
    </Container>
  );
}
