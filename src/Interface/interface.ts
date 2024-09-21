import { ReactNode } from "react";

interface todos {
  completed: boolean;
  id: number;
  text: string;
  date: string;
}

export interface State {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  todos: todos[];
}

export interface TodoAction {
  title: string;
  children: ReactNode;
  height: string;
  width?: string;
}
