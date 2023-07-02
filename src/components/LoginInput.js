import React, { useState } from 'react';

const LoginInput = () => {

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
    const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  

  return (
    <div>
      
      <input
    type="email"
    className="form-control"
    placeholder="Enter email"
    name="input_id"
    value={inputId}
    onChange={handleInputId}
  />
  
  <input
    type="password"
    className="form-control"
    placeholder="Enter password"
    name="input_pw"
    value={inputPw}
    onChange={handleInputPw}
  />

  
      
    </div>
  );

  
};

export default LoginInput;