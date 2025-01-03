/**
 * State로 사용자 입력 관리하기
 * -> 사용자 입력 관리
 * -> 사용자 입력 유효성 검사
 * -> 사용자 입력 저장
 */

import { useState } from "react";

const Register = () => {
  // 사용자 입력 저장 (하나의 객체로 관리)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 사용자 입력 변경 함수
  const onChange = (e) => {
    // 입력 이름을 키로 사용하여 입력 값을 업데이트
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>State로 사용자 입력 관리하기</h2>
      <div>
        <input
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
    </section>
  );
};

export default Register;
