import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import "./EnhancedTodoListApp.css";
import { useRef, useReducer, useCallback } from "react";

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

/**
 * 수정된 부분
 * -> 상태 변경 로직을 reducer 함수로 구현
 */
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data);
    default:
      return state;
  }
}

const EnhancedTodoListApp = () => {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  /**
   * useCallback
   * -> 함수를 메모이제이션하여 불필요한 리렌더링 방지
   */
  const onCreate = useCallback((content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    dispatch({ type: "CREATE", data: newTodo });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", data: targetId });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", data: targetId });
  }, []);

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

export default EnhancedTodoListApp;
