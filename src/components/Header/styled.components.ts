import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  margin-top: 20px;
  gap: 18px;
  > img {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  margin: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LogoutButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 30px;
`;

export const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 160px;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border-radius: 4px;
  cursor: pointer;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: white;
`;

export const UserName = styled.h2`
  margin: 0px;
  color: #1524c3;
`;
