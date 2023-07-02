import styled from "styled-components";

export const FormSection = styled.section`
  max-width: 500px;
  margin: 40px auto;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 8px;
  font-size: 1rem;
  background-color: #0073b1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005582;
  }
`;
