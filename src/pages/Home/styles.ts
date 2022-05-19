import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid #000;
  width: 450px;
  height: 550px;
  padding: 10px 16px;
  border-radius: 5px;
  margin-top: 25%;
`;
export const Label = styled.label`
  margin-bottom: 8px;
  margin-top: 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #4d3a33;
  padding: 13px 16px 13px 16px;
`;
export const Select = styled.select`
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #4d3a33;
  padding: 13px 16px 13px 16px;
`;
export const Option = styled.option``;
export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #4d3a33;
  spadding: 13px 16px 13px 16px;
  background: red;
  color: #fff;
`;
