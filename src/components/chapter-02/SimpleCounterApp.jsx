/**
 * View-Controller 패턴을 구현한 간단한 카운터 앱
 * -> View(Viewer): 데이터를 보여주는 역할
 * -> Controller(Controller): 사용자의 입력을 처리하는 역할
 * -> 데이터(count)는 부모 컴포넌트에서 관리하며 자식 컴포넌트로 전달
 */
import Viewer from "./Viewer";
import Controller from "./Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./Even";
const SimpleCounterApp = () => {
  // 카운터의 상태값을 관리하는 state
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  /**
   * useEffect 훅을 사용하여 상태값 변경 시 호출되는 이벤트 핸들러
   * -> count, input 상태값이 변경될 때마다 호출됨
   */
  useEffect(() => {
    console.log(`count: ${count}, input: ${input}`);
  }, [count, input]);

  /**
   * useEffect로 라이프사이클 제어하기
   */

  // 1. 마운트: 컴포넌트가 처음 렌더링될 때 호출
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 컴포넌트가 업데이트될 때 호출
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  /**
   * 버튼 클릭시 호출되는 이벤트 핸들러
   * -> Controller 컴포넌트로 전달되어 사용자 입력 처리
   * -> value만큼 count 상태값을 증가/감소
   */
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <section>
      <h2>Simple Counter App</h2>
      <section>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        {/* View 역할: 현재 count 상태를 화면에 표시 */}
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        {/* Controller 역할: 사용자의 버튼 입력을 처리 */}
        <Controller onClickButton={onClickButton} />
      </section>
    </section>
  );
};

export default SimpleCounterApp;
