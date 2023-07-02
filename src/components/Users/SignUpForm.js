import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { join } from "../../redux/slice/userSlice";
import {
  FormInput,
  FormLabelText,
  FormLayout,
  FormRow,
  FormSelect,
  FormSubmitBtn,
  FormTitle,
  FormWrapper,
} from "./UserStyle";

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const joinData = {
      userName: userName,
      password: password,
      nickName: nickName,
      gender: gender,
    };

    dispatch(join(joinData))
      .then((action) => {
        const response = action.payload;
        console.log("회원가입 성공~ 로그인 페이지로 이동");
        console.log(response);
        navigate("/api/v1/members/login");
      })
      .catch((error) => {
        console.log("회원가입 실패");
        console.log(error);
      });
  };

  return (
    <FormLayout>
      <FormTitle>Get Started</FormTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <FormRow>
          <FormLabelText htmlFor="userName">ID</FormLabelText>
          <FormInput
            type="text"
            id="userName"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </FormRow>
        <FormRow>
          <FormLabelText htmlFor="password">Password</FormLabelText>
          <FormInput
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormRow>
        <FormRow>
          <FormLabelText htmlFor="nickName">NickName</FormLabelText>
          <FormInput
            type="text"
            id="nickName"
            value={nickName}
            onChange={(event) => setNickName(event.target.value)}
          />
        </FormRow>
        <FormRow>
          <FormLabelText htmlFor="gender">Gender</FormLabelText>
          <FormSelect
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="MALE">남성</option>
            <option value="FEMALE">여성</option>
          </FormSelect>
        </FormRow>

        <FormSubmitBtn type="submit">Sign Up</FormSubmitBtn>
      </FormWrapper>
    </FormLayout>
  );
}

export default SignUpForm;
