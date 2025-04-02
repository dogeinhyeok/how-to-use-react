import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import "./EnhancedTodoListApp.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  const memoizedDispatch = useMemo(
    () => ({
      onCreate,
      onUpdate,
      onDelete,
    }),
    [onCreate, onUpdate, onDelete]
  );

  return (
    <section>
      <h2>Todo List App</h2>
      <div className="TodoListApp">
        <Header />
        {/*
         * TodoContext.Provider 설명
         * -> Context API의 핵심 컴포넌트
         * -> value prop으로 전달된 데이터를 자식 컴포넌트들과 공유
         * -> 이를 통해 props drilling 문제 해결 가능
         * -> 아래 예시에서는 { todos, onCreate, onUpdate, onDelete }를 자식들과 공유
         */}
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </section>
  );
};

export default EnhancedTodoListApp;
