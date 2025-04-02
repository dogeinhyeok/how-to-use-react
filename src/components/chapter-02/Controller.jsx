/**
 * View-Controller 패턴의 Controller 컴포넌트
 * -> 사용자의 입력을 처리하는 역할을 담당
 * -> 버튼 클릭 이벤트를 통해 상태 변경을 요청
 *
 * 구현 방식:
 * 1. 부모로부터 onClickButton 콜백 함수를 props로 전달받음
 * 2. 각 버튼 클릭 시 해당 값(+/-1, +/-10, +/-100)을 인자로 전달
 * 3. 부모 컴포넌트에서 실제 상태 업데이트 수행
 */
const Controller = ({ onClickButton }) => {
  return (
    <div>
      {/* 감소 버튼들: 음수값 전달 */}
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>

      {/* 증가 버튼들: 양수값 전달 */}
      <button
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
