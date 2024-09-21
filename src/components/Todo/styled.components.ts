import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding: 32px 12px;
  width: 100%;
`;

export const AddTodo = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  @media (max-width: 400px) {
    width: 100%;
  }

  > button {
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    background: linear-gradient(to right, #9c27b0, #e040fb);
    border: 0;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    height: 30px;
    width: 100px;
  }
  > select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4d4dae;
    border-radius: 4px;
    border: none;
    color: white;
    width: 100px;
  }
`;

export const EditTodo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  > input {
    width: 85%;
    height: 25px;
    border-radius: 8px;
  }
  > button {
    width: 20%;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    background: green;
    border: 0;
  }
`;

export const ListTodo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > div {
    width: 80%;
    @media (max-width: 768px) {
      width: 65%;
    }
    @media (max-width: 400px) {
      width: 60%;
    }
  }
`;

export const EditButton = styled.button`
  background-color: green;
  color: #fff;
  border: 0;
  border-radius: 4px;
  width: 5%;
  cursor: pointer;
  height: 30px;
  @media (max-width: 400px) {
    width: 10%;
  }
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  height: 30px;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  &:checked {
    background-color: red;
    border: green;
  }
`;

export const PopupFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  height: 30px;
  > button:first-child {
    background-color: white;
    border-radius: 4px;
    border: 1px solid gray;
    cursor: pointer;
  }
  > button:last-child {
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const DeleteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AddInputBox = styled.input`
  width: 100%;
  height: 50px;
`;

export const AddInputDate = styled.input`
  width: 100%;
  height: 20px;
`;

export const AddtaskFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  height: 30px;
  width: 100%;
  > button:first-child {
    background-color: white;
    border-radius: 4px;
    border: 1px solid rebeccapurple;
  }
  > button:last-child {
    border: none;
    background: linear-gradient(to right, #9c27b0, #e040fb);
    color: #fff;
    border-radius: 4px;
    padding: 0px 10px;
    cursor: pointer;
  }
`;

export const AddTaskForm = styled.form<{ error?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  > div:first-child {
    > textarea {
      width: 100%;
    }
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => (props.error ? "12px" : "30px")};
  }
`;

export const EditTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  > div:first-child {
    > textarea {
      width: 100%;
    }
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

export const TodoListTitle = styled.h3`
  margin: 0px;
  margin-bottom: 20px;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background: #f3ebf6;
  gap: 10px;
  padding: 10px;
  padding-top: 20px;
  border-radius: 4px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const TodoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  background: white;
  padding: 12px;
  border-radius: 4px;
`;

export const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TodoText = styled.b<{ text?: Boolean }>`
  margin-right: 10px;
  text-decoration: ${(props) => (props.text ? "line-through" : "none")};
`;

export const TodoDate = styled.span<{ date?: boolean }>`
  font-size: 12px;
  text-decoration: ${(props) => (props.date ? "line-through" : "none")};
`;

export const PopupHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
