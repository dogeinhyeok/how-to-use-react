import { useState } from "react";
import useInput from "./useInput";

/**
 * 커스텀 훅 사용 예제
 * -> 입력값 관리를 위한 커스텀 훅(useInput)을 재사용하는 방법 설명
 * -> 여러 개의 입력 필드에서 동일한 로직을 재사용 가능
 *
 * 커스텀 훅 사용 시 장점
 * -> 코드 중복 제거
 * -> 로직 재사용성 향상
 * -> 컴포넌트 코드 간소화
 *
 * 주의사항
 * -> 함수 컴포넌트나 다른 훅 내부에서만 사용 가능
 * -> 조건부, 반복문 안에서 사용 불가
 * -> 이름은 반드시 'use'로 시작해야 함
 */

const HookExam = () => {
  // useInput 훅을 사용하여 두 개의 독립적인 입력값 관리
  const [firstInput, onFirstChange] = useInput(); // 첫 번째 입력 필드용
  const [secondInput, onSecondChange] = useInput(); // 두 번째 입력 필드용

  return (
    <section>
      <h2>커스텀 훅 사용 예제</h2>
      <div>
        {/* 첫 번째 입력 필드 */}
        <input
          value={firstInput}
          onChange={onFirstChange}
          placeholder="첫 번째 입력"
        />
      </div>
      <div>
        {/* 두 번째 입력 필드 */}
        <input
          value={secondInput}
          onChange={onSecondChange}
          placeholder="두 번째 입력"
        />
      </div>
      <div>
        <p>첫 번째 입력값: {firstInput}</p>
        <p>두 번째 입력값: {secondInput}</p>
      </div>
    </section>
  );
};

export default HookExam;
