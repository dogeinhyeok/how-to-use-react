/**
 * 컴포넌트 생성
 * -> 컴포넌트 이름은 대문자로 시작
 * -> 컴포넌트 함수는 소문자로 시작
 */

const Button = ({ text, color = "black", children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}: {color.toUpperCase()}
      {/* 자식 컴포넌트 출력 */}
      {children}
    </button>
  );
};

export default Button;
