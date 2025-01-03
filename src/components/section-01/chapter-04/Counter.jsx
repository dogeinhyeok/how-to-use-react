import { useState } from "react";

/**
 * State 사용
 * -> 컴포넌트의 상태를 관리하는 데이터
 * -> 상태가 변경되면 컴포넌트가 자동으로 리렌더링됨
 * -> useState() 훅을 사용하여 선언
 * -> const [state, setState] = useState(초기값) 형태로 사용
 * -> setState 함수로만 state 값을 변경해야 함
 */
const Counter = () => {
  // State 선언
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>State 사용</h2>
      {/* State 객체 상태에 따라 렌더링 동기화 */}
      {count}
      {/* State 상태 변경 */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </section>
  );
};

export default Counter;
