import React, { useState } from "react";
import MypageWrote from "./MypageWrote";
import MypageLike from "./MypageLike";
import {
  MyActivityLayOut,
  MyActivityButton,
  LineContainer,
} from "./MypageStyle";
import { BsFilePostFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

export default function MypageActivity() {
  const [activeTab, setActiveTab] = useState("wrote");

  const handleClickWrote = () => {
    setActiveTab("wrote");
  };

  const handleClickLike = () => {
    setActiveTab("like");
  };

  return (
    <>
      <MyActivityLayOut>
        <MyActivityButton onClick={handleClickWrote}>
          <BsFilePostFill color="#B5B5B5" /> 내 게시글
        </MyActivityButton>
        <MyActivityButton onClick={handleClickLike}>
          <AiOutlineLike color="#B5B5B5" /> 관심 글
        </MyActivityButton>
      </MyActivityLayOut>

      <LineContainer />

      {activeTab === "wrote" ? <MypageWrote /> : <MypageLike />}
    </>
  );
}
