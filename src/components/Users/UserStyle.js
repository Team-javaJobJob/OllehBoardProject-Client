import styled from "styled-components";

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const FormTitle = styled.h1`
  margin-bottom: 60px;
  font-size: 23px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  // transform: translateY(-150px);
`;

export const FormRow = styled.div`
  padding: 5px;
`;

export const FormLabelText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const FormInput = styled.input`
  padding: 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;
  text-align: center;
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

export const FormSubmitBtn = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;
  text-align: center;
  background-color: #bf94e4;
  color: white;
  font-size: 20px;
  border: solid 2px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    opacity: 0.3;
  }
`;

export const FormSelect = styled.select`
  padding: 3px;
  font-size: 13px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 200px;
  margin-bottom: 20px;
`;
