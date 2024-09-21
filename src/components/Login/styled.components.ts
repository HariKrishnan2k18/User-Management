import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  background-color: white;
  padding: 68px;
  border-radius: 12px;
  width: 400px;
  @media (max-width: 450px) {
    width: 80%;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding: 10px 40px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;

export const Username = styled.input`
  color: rgb(38, 50, 56);
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid #dd6fcc;
  text-align: center;
`;
export const Password = styled.input`
  color: rgb(38, 50, 56);
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid #dd6fcc;
  text-align: center;
`;

export const ForgotPassword = styled.a`
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  text-decoration: none;
`;

export const InlineError = styled.p`
  margin: 0px;
  color: red;
  font-size: 13px;
`;
