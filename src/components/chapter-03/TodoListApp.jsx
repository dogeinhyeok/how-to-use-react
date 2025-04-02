import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import "./TodoListApp.css";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

const TodoListApp = () => {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos 배열에서 targetId와 일치하는 객체를 찾아서 isDone 값을 반전시킨 후, 새로운 배열을 반환
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 객체를 제거한 후, 새로운 배열을 반환
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <section>
      <h2>Todo List App</h2>
      <div className="TodoListApp">
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </section>
  );
};

export default TodoListApp;
