import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../../redux/todoSlice";
import {
  Container,
  AddTodo,
  ListTodo,
  EditButton,
  DeleteButton,
  TodoList,
  TodoListTitle,
  TodoRow,
  TodoContent,
  TodoText,
  TodoDate
} from "./styled.components";
import Popup from "./Popup";
import { TaskAdd, TaskDelete, TaskEdit } from "./Actions";
import { AiFillCheckCircle, AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { State, TodoAction } from "../../Interface/interface";

const TodoApp = () => {
  const todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const [todoId, setTodoId] = useState<{
    id: number | string;
    text: string;
    action: string;
    date: string;
  }>({
    id: "",
    text: "",
    action: "",
    date: ""
  });
  const [filter, setFilter] = useState("All");
  const handleBack = () => {
    setisOpen(false);
    setTodoId({ id: "", text: "", action: "", date: "" });
  };

  const todoAction: {
    [key: string]: TodoAction;
  } = {
    add: {
      title: "Add New Task",
      children: <TaskAdd handleBack={handleBack} />,
      height: "265px"
    },
    edit: {
      title: "Edit Task",
      children: <TaskEdit todo={todoId} handleBack={handleBack} />,
      height: "265px"
    },
    delete: {
      title: "Delete Confirmation",
      children: <TaskDelete todo={todoId} handleBack={handleBack} />,
      height: "200px",
      width: "360px"
    }
  };
  const popup = todoAction[todoId.action] && todoAction[todoId.action];

  return (
    <Container>
      <TodoListTitle>TODO LIST</TodoListTitle>
      <AddTodo>
        <button
          onClick={() => {
            setTodoId({
              ...todoId,
              action: "add"
            });
            setisOpen(true);
          }}
        >
          Add Todo
        </button>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
      </AddTodo>

      <TodoList>
        {todos
          .filter((e) =>
            filter === "All"
              ? e.completed || !e.completed
              : filter === "Completed"
              ? e.completed
              : !e.completed
          )
          .map((todo) => (
            <TodoRow key={todo.id}>
              <ListTodo>
                <AiFillCheckCircle
                  style={{ color: todo.completed ? "green" : "red" }}
                  size={25}
                  onClick={() => dispatch(toggleComplete(todo.id))}
                />
                <TodoContent>
                  <TodoText text={todo.completed}>{todo.text}</TodoText>
                  <TodoDate date={todo.completed}>{todo.date}</TodoDate>
                </TodoContent>
                <EditButton
                  onClick={() => {
                    setTodoId({
                      ...todo,
                      action: "edit"
                    });
                    setisOpen(true);
                  }}
                >
                  <AiOutlineEdit />
                </EditButton>
                <DeleteButton
                  onClick={() => {
                    setTodoId({
                      ...todo,
                      action: "delete"
                    });
                    setisOpen(true);
                  }}
                >
                  <AiFillDelete />
                </DeleteButton>
              </ListTodo>
            </TodoRow>
          ))}
      </TodoList>
      <Popup
        isOpen={isOpen}
        title={popup?.title}
        children={popup?.children}
        height={popup?.height}
        width={popup?.width}
        setOpen={() => setisOpen(false)}
      ></Popup>
    </Container>
  );
};

export default TodoApp;
