import { useState } from "react";

/**
 * 커스텀 훅(Custom Hook)
 * -> 여러 컴포넌트에서 재사용 가능한 로직을 분리하여 관리
 * -> 반드시 'use'로 시작하는 이름을 사용해야 함
 * -> 내부에서 다른 Hook을 호출할 수 있음
 * -> 컴포넌트 로직을 재사용 가능한 함수로 추출
 */
function useInput() {
  // useState를 사용하여 입력값 상태 관리
  // input: 현재 입력값 저장
  // setInput: input 값을 업데이트하는 함수
  const [input, setInput] = useState("");

  /**
   * 입력값 변경 이벤트 핸들러
   * -> 이벤트 객체(e)에서 입력된 값(e.target.value)을 추출
   * -> setInput을 통해 input 상태 업데이트
   */
  const onChange = (e) => {
    setInput(e.target.value);
  };

  // 배열 형태로 현재 입력값과 변경 함수를 반환
  // -> 구조 분해 할당으로 쉽게 사용 가능
  return [input, onChange];
}

export default useInput;
