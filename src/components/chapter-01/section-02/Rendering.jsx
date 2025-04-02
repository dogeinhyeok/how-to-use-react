/**
 * JSX 렌더링
 * -> 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
 * -> 숫자, 문자열, 배열 값만 렌더링 가능
 * -> 객체, 함수는 렌더링 불가능
 * -> 최상위 태그는 반드시 하나여야만 한다
 */
const Rendering = () => {
  // 변수 선언
  const number = 10;

  // 객체 선언
  const user = {
    name: "이정환",
    isLogin: false,
  };

  // 함수 선언
  const isLogin = () => {
    if (user.isLogin) {
      return <div>로그아웃</div>;
    } else {
      return <div>로그인</div>;
    }
  };

  return (
    <section>
      <h2>JSX 렌더링 사용</h2>
      {/* 렌더링 가능 */}
      <div>{10}</div>
      <div>{number}</div>
      <div>{[1, 2, 3, 4, 5]}</div>
      <div>{"string"}</div>

      {/* 렌더링 불가능 */}
      <div>{true}</div>
      <div>{undefined}</div>
      <div>{null}</div>
      {/* <div>{() => {}}</div> */}

      {/* 삼항연산자에 따른 렌더링 */}
      {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}

      {/* 조건문에 따른 렌더링 */}
      {isLogin()}

      {/* 스타일 적용 */}
      <div
        style={{
          color: "wheat",
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        스타일 적용
      </div>
      <div className="logout">스타일 적용</div>
    </section>
  );
};

export default Rendering;
