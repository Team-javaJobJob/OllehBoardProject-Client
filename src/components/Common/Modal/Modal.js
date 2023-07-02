import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalBody, ModalContainer } from "./ModalStyle";

export default function Modal({ type, isOpen, onClose, hasCancel, onSubmit }) {
  const navigate = useNavigate();

  // 탈퇴 시 비밀번호 받기
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(password);
      navigate("/");
    }
  };

  let message, actions;

  switch (type) {
    case "loginRequest":
      message = "로그인이 필요합니다";
      actions = (
        <>
          <button onClick={() => navigate("/api/v1/members/login")}>
            확인
          </button>
        </>
      );
      break;
    case "withdrawal":
      message = "비밀번호를 입력해 주세요";
      actions = (
        <>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>확인</button>
          {hasCancel && <button onClick={onClose}>취소</button>}
        </>
      );
      break;
    default:
      break;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalBody>
        <h1>{message}</h1>
        <p>{actions}</p>
      </ModalBody>
    </ModalContainer>
  );
}
