import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Common/Modal/Modal";
import { deleteUserData } from "../../redux/slice/userSlice";
import { FaUserCog, FaUserAstronaut } from "react-icons/fa";
import {
  MyInfoLayout,
  MyInfoBox,
  MyInfoName,
  MyInfoNickname,
  MyInfoButton,
} from "../MyPage/MypageStyle";

export default function MypageProfile({ username, nickname }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //모달 상태
  const [modalOpen, setModalOpen] = useState(false);
  const deleteUser = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const changeInfo = () => {
    navigate("/api/v1/myPage/update");
  };

  //회원 삭제하기
  const handleSubmit = async (password) => {
    try {
      await dispatch(deleteUserData(password));
      closeModal();
    } catch (error) {
      alert("탈퇴 실패 : " + error.message);
    }
  };

  return (
    <>
      <MyInfoLayout>
        <h1>마이페이지</h1>
        <p>나의 관심사 및 활동을 확인해 보세요!</p>
        <MyInfoBox>
          <div>
            <FaUserAstronaut />
            <MyInfoName>
              안녕하세요 <br /> {username}님{" "}
            </MyInfoName>
          </div>

          <MyInfoNickname>닉네임 {nickname}</MyInfoNickname>

          <MyInfoButton onClick={changeInfo}>
            <FaUserCog color="#ffff" />
            프로필 수정
          </MyInfoButton>
          <button onClick={deleteUser}>탈퇴하기</button>
        </MyInfoBox>
      </MyInfoLayout>

      <Modal
        type="withdrawal"
        isOpen={modalOpen}
        onClose={closeModal}
        hasCancel
        onSubmit={handleSubmit}
      />
    </>
  );
}
