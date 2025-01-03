/**
 * Props 사용
 * -> 컴포넌트에 전달되는 데이터
 * -> 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법
 * -> 객체 형태로 전달되며 읽기 전용(read-only)
 * -> 컴포넌트의 속성을 설정하는 용도로 사용
 * -> 전개 연산자(...)를 사용하여 여러 props를 한번에 전달 가능
 * -> children prop으로 컴포넌트 태그 사이의 내용 전달 가능
 */

import Button from "./Button";

const ButtonProps = () => {
  // Props 선언
  const buttonProps = {
    text: "카페",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <section>
      <h2>Props 사용</h2>
      {/* 컴포넌트의 속성을 설정하는 용도로 사용 */}
      <Button text={"메일"}></Button>

      {/* 전개 연산자(...)를 사용하여 여러 props를 한번에 전달 가능 */}
      <Button {...buttonProps} />

      {/* children prop으로 컴포넌트 태그 사이의 내용 전달 가능 */}
      <Button text={"블로그"} color={"green"}>
        {/* 자동으로 green 적용됨 */}
        <div>child 1</div>
        <div>child 2</div>
      </Button>
    </section>
  );
};

export default ButtonProps;
