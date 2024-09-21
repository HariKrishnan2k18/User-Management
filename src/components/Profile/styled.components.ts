import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 12px;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Wrapper = styled.div`
  > div:first-child {
    width: 10px;
    cursor: pointer;
  }
  > div:last-child {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 400px) {
      padding: 0px;
      flex-direction: column;
    }
  }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  background-color: white;
  padding: 20px;
  margin-top: 150px;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const EditProfile = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  height: 100%;
  @media (max-width: 400px) {
    width: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  > div > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
    p {
      margin: 4px;
      width: 80%;
    }
    > div {
      > input {
        border-radius: 8px;
        width: 100%;
        text-align: center;
        height: 20px;
      }
      > p {
        margin: 0px;
        width: 100%;
      }
      width: 100%;
    }
  }
`;
export const EditButton = styled.button`
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding: 6px 40px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  > p {
    cursor: pointer;
    color: #9c27b0;
    margin-top: 20px;
  }
`;

export const ProfileImage = styled.img`
  @media (max-width: 1024px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 600px) {
    width: 80px;
  }
  @media (max-width: 400px) {
    width: 70px;
  }
`;
