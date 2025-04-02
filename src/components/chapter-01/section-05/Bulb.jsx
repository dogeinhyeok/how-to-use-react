/**
 * State와 Props 사용
 * -> 컴포넌트 내부에서 사용되는 데이터
 * -> State: 컴포넌트의 상태를 저장하고 관리하는 객체
 * -> Props: 부모 컴포넌트로부터 전달받는 데이터
 * -> useState: React Hook으로 State를 생성하고 관리하는 함수
 */

import { useState } from "react";

const Bulb = () => {
  // State 선언
  // light: 현재 전구의 상태를 저장 (ON/OFF)
  // setLight: light 상태를 변경하는 함수
  const [light, setLight] = useState("OFF");
  return (
    <section>
      <h2>State와 Props 사용</h2>
      {/* { light } State 객체 상태에 따라 렌더링 - 현재 전구 상태 표시 */}
      {light}
      <button
        onClick={() => {
          // 클릭 시 전구 상태를 반전 (ON->OFF, OFF->ON)
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {/* 버튼 텍스트는 현재 상태에 따라 동적으로 변경 */}
        {light === "OFF" ? "전구 켜기" : "전구 끄기"}
      </button>

      {/* 조건문에 따른 렌더링 - 삼항 연산자 사용 */}
      {/* light 상태가 ON이면 주황색 배경, OFF면 회색 배경으로 표시 */}
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </section>
  );
};

export default Bulb;
