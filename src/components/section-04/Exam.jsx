import { useReducer } from "react";

/**
 * reducer 함수 설명
 * -> 현재 상태(state)와 액션 객체(action)를 받아서 새로운 상태를 반환하는 함수
 * -> state: 현재 상태값 (여기서는 숫자)
 * -> action: 상태 변경을 위한 정보를 담은 객체
 * -> - type: 어떤 종류의 상태 변경인지 나타내는 문자열
 * -> - data: 변경에 필요한 데이터
 */
function reducer(state, action) {
  // 액션 타입에 따라 상태 변경
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch 함수에 액션 객체를 전달
    // -> type: 수행할 동작의 종류
    // -> data: 상태 변경에 사용될 값
    dispatch({ type: "INCREASE", data: 1 });
  };

  const onClickMinus = () => {
    dispatch({ type: "DECREASE", data: 1 });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
