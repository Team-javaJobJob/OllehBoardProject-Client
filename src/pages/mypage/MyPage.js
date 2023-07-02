import React from "react";
import { useSelector } from "react-redux";
import MypageProfile from "../../components/MyPage/MypageProfile";
import MypageActivity from "../../components/MyPage/MypageActivity";
import { MypageContainer } from "../../components/MyPage/MypageStyle";

export default function MyPage() {
  const { username, nickname, gender } = useSelector((state) => state.user);

  return (
    <MypageContainer>
      <MypageProfile username={username} nickname={nickname} gender={gender} />
      <MypageActivity />
    </MypageContainer>
  );
}
