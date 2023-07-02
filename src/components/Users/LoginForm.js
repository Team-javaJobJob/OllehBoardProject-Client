import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/userSlice";
import {
  FormLayout,
  FormTitle,
  FormWrapper,
  FormRow,
  FormLabelText,
  FormInput,
  FormSubmitBtn,
} from "./UserStyle";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      userName: userName,
      password: password,
    };
    dispatch(login(data))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          navigate(`/`);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <FormLayout>
      <FormTitle>Welcome</FormTitle>
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
        <FormSubmitBtn type="submit">Login</FormSubmitBtn>
        {error && <div>{error}</div>}
      </FormWrapper>
    </FormLayout>
  );
}
