/**
 * State: 컴포넌트의 상태를 관리하는 데이터
 * -> 값이 변경되면 화면이 다시 렌더링됨
 * -> UI와 관련된 데이터 관리에 사용
 * -> setter 함수로 값을 변경 (예: setInput)
 */

/**
 * useRef: 컴포넌트 내부에서 변경되지 않는 값을 저장하는 데 사용
 * -> 렌더링과 무관하게 값을 저장
 * -> DOM 요소에 직접 접근할 때 사용
 * -> 컴포넌트가 리렌더링되어도 값이 유지됨
 * -> .current로 값을 직접 변경
 */

import { useState, useRef } from "react";

// 주의: 외부에 선언시 글로벌 변수로 사용됨
let globalCount = 0;

const Register = () => {
  // 사용자 입력 저장 (하나의 객체로 관리)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // Ref 객체 생성
  const countRef = useRef(0);
  const inputRef = useRef();

  // 자바스크립트 변수를 쓰지 않는 이유
  // -> 리렌더링 발생 시 변수 초기화
  let count = 0;

  // 사용자 입력 변경 함수
  const onChange = (e) => {
    // 리렌더링 발생 시 변수 유지
    countRef.current++;
    // 주의: 리렌더링 발생 시 변수 초기화됨
    count++;
    globalCount++;
    console.log(
      `count: ${count}  countRef: ${countRef.current}  globalCount: ${globalCount}`
    );
    // 입력 이름을 키로 사용하여 입력 값을 업데이트
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // DOM 요소에 직접적인 조작이 필요할 때
      inputRef.current.focus(); // 이름이 비어있을 때 input 요소에 focus
    }
  };

  return (
    <section>
      <h2>State로 사용자 입력 관리하기</h2>
      <div>
        {/* 포커스, 스크롤, 크기 측정 등의 작업 */}
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        ></input>
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
          placeholder={"생년월일"}
        ></input>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">국가</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </section>
  );
};

export default Register;
