import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../../redux/todoSlice";
import {
  AddInputDate,
  AddtaskFooter,
  AddTaskForm,
  DeleteContent,
  EditTaskForm,
  PopupFooter
} from "./styled.components";

interface TodoTask {
  todo: { text: string; id: string | number; date: string };
  handleBack: () => void;
}

const TaskAdd = ({ handleBack }: { handleBack: () => void }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const wordCount = newTodo.trim().split(/\s+/).length;
    if (wordCount < 5) {
      setError("Please enter at least 5 words.");
      return;
    }
    if (!newDate) {
      setError("Date is required.");
      return;
    }
    dispatch(addTodo({ text: newTodo, date: newDate }));
    setNewTodo("");
    setNewDate("");
    setError("");
    handleBack();
  };
  return (
    <AddTaskForm onSubmit={handleAddTodo} error={error}>
      <div>
        <textarea
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{
            resize: "none",
            height: "70px",
            borderColor: "rebeccapurple"
          }}
        />
        <AddInputDate
          type="date"
          onChange={(e) => setNewDate(e.target.value)}
          style={{
            border: "1.5px solid rebeccapurple"
          }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <AddtaskFooter>
        <button onClick={handleBack}>Cancel</button>
        <button type="submit">Add</button>
      </AddtaskFooter>
    </AddTaskForm>
  );
};

const TaskDelete = ({ todo, handleBack }: TodoTask) => {
  const dispatch = useDispatch();
  return (
    <>
      <DeleteContent>
        {`Do you want to delete the todo "${todo.text}" ?`}
      </DeleteContent>
      <div
        style={{
          bottom: "20px"
        }}
      >
        <PopupFooter>
          <button onClick={handleBack}>Cancel</button>
          <button
            onClick={() => {
              dispatch(deleteTodo(todo.id));
              handleBack();
            }}
          >
            Delete
          </button>
        </PopupFooter>
      </div>
    </>
  );
};

const TaskEdit = ({ todo, handleBack }: TodoTask) => {
  const [todoText, setTodoText] = useState(todo.text);
  const [tododate, setTodoDate] = useState(todo.date);
  const dispatch = useDispatch();
  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const wordCount = todoText.trim().split(/\s+/).length;
    if (wordCount < 5) {
      alert("Task description must contain at least 5 words.");
      return;
    }
    if (!tododate) {
      alert("Please select a valid date.");
      return;
    }
    dispatch(editTodo({ id: todo.id, text: todoText, date: tododate }));
    setTodoText("");
    setTodoDate("");
    handleBack();
  };
  return (
    <>
      <EditTaskForm onSubmit={handleEditTodo}>
        <div>
          <textarea
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            style={{ resize: "none", height: "70px" }}
          />
          <br></br>
          <AddInputDate
            type="date"
            value={tododate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <AddtaskFooter>
          <button onClick={handleBack}>Cancel</button>
          <button type="submit">Save</button>
        </AddtaskFooter>
      </EditTaskForm>
    </>
  );
};

export { TaskAdd, TaskDelete, TaskEdit };
