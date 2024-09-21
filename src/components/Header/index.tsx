import {
  Container,
  EditButton,
  LogoutButton,
  ProfileContent,
  Title,
  UserName
} from "./styled.components";
import ProfilePicture from "../../asset/profile.png";
import { logout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import github from "../../asset/github.png";
import { State } from "../../Interface/interface";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const profileDetail = useSelector((state: State) => state.user);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    setModalPosition({ top: clientY, left: clientX });
    setModalIsOpen(true);
  };
  return (
    <>
      <Container>
        <Title>{`Welcome,  ${profileDetail.name}`}</Title>
        <img src={github} alt="profile" width="40px" height="30px" />
        <img
          src={ProfilePicture}
          alt="profile"
          width="40px"
          height="30px"
          onClick={openModal}
        ></img>
        <LogoutButton
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </LogoutButton>
      </Container>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "transparent"
            },
            content: {
              position: "absolute",
              top: `${modalPosition.top}px`,
              left: `${modalPosition.left}px`,
              marginTop: `${modalPosition.top + 50}px`,
              transform: "translate(-50%, -50%)",
              padding: "20px",
              border: "none",
              borderRadius: "8px",
              width: "160px",
              height: "160px",
              background: "linear-gradient(to right, #5dc9e4, #58aab4)"
            }
          }}
        >
          <ProfileContent>
            <UserName>{profileDetail.username.toUpperCase()}</UserName>
            <div>{profileDetail.name}</div>
            <div>{profileDetail.email}</div>
            <div>{profileDetail.phone}</div>
            <EditButton onClick={() => navigate("/profile")}>Edit</EditButton>
          </ProfileContent>
        </Modal>
      )}
    </>
  );
}
export default Header;
