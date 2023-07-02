import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUserData } from "../../redux/slice/userSlice";
import Modal from "../../components/Common/Modal/Modal";
import {
  FormLayout,
  FormTitle,
  FormWrapper,
  FormRow,
  FormLabelText,
  FormInput,
  FormSubmitBtn,
  FormSelect,
} from "../../components/Users/UserStyle";

export default function MyPageForm() {
  const { username, nickname, gender } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Modal 상태
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    username,
    requestPw: "",
    password: "",
    nickname,
    gender,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateUserData(formData));
    setShowModal(true);
  };

  return (
    <>
      <FormLayout>
        <FormTitle>프로필 수정</FormTitle>
        <FormWrapper onSubmit={handleSubmit}>
          <FormRow>
            <FormLabelText htmlFor="username">아이디</FormLabelText>
            <FormInput
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormLabelText htmlFor="requestPw">현재 비밀번호</FormLabelText>
            <FormInput
              type="password"
              id="requestPw"
              value={formData.requestPw}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormLabelText htmlFor="password">새 비밀번호</FormLabelText>
            <FormInput
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormLabelText htmlFor="nickname">닉네임</FormLabelText>
            <FormInput
              type="text"
              id="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <FormLabelText htmlFor="gender">성별</FormLabelText>
            <FormSelect
              id="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </FormSelect>
          </FormRow>
          <FormSubmitBtn onClick={handleSubmit}>적용</FormSubmitBtn>
        </FormWrapper>
      </FormLayout>

      <Modal
        type="loginRequest"
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
}
