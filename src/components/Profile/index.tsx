import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/userSlice";
import {
  Container,
  EditButton,
  EditProfile,
  ImageDiv,
  ProfileImage,
  Wrapper
} from "./styled.components";
import profileImage from "../../asset/profile.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { State } from "../../Interface/interface";
import { InlineError } from "../Login/styled.components";

const Profile = () => {
  const user = useSelector((state: State) => state.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", username: "", email: "", phone: "" };
    const emailRegex =
      /^[a-zA-Z0-9]+[a-zA-Z]+[0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim()) {
      newErrors.name = "Enter the name ";
      isValid = false;
    } else if (name.trim().length < 4) {
      newErrors.name = "Enter name more then 3 letter";
      isValid = false;
    }
    if (!username.trim()) {
      newErrors.username = "Enter the username";
      isValid = false;
    } else if (username.trim().length < 5) {
      newErrors.username = "Enter username more then 4 letter";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Enter email Id";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    }
    if (!phone.trim()) {
      newErrors.phone = "Enter Phone number";
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!edit) {
      setEdit(true);
    } else {
      if (validateForm()) {
        dispatch(updateProfile({ username, email, name, phone }));
        setEdit(false);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <div
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <FaArrowLeft />
        </div>
        <div>
          <ImageDiv>
            <ProfileImage src={profileImage} alt="profile" width="150px" />
            <p>Hello {name}</p>
          </ImageDiv>
          <EditProfile onSubmit={handleSubmit}>
            <div>
              <span>
                <p>Name</p>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    disabled={!edit}
                  />
                  {errors.name && <InlineError>{errors.name}</InlineError>}
                </div>
              </span>
              <span>
                <p>User Name</p>
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    disabled={!edit}
                  />
                  {errors.username && (
                    <InlineError>{errors.username}</InlineError>
                  )}
                </div>
              </span>
              <span>
                <p>Email</p>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    disabled={!edit}
                  />
                  {errors.email && <InlineError>{errors.email}</InlineError>}
                </div>
              </span>
              <span>
                <p>Phone Number</p>
                <div>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    disabled={!edit}
                  />
                  {errors.phone && <InlineError>{errors.phone}</InlineError>}
                </div>
              </span>
            </div>
            <EditButton type="submit">{!edit ? "Edit" : "Save"}</EditButton>
          </EditProfile>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Profile;
