/**
 * View-Controller 패턴의 View 컴포넌트
 * -> 데이터를 화면에 표시하는 역할만 담당
 * -> 부모로부터 전달받은 count 상태값을 단순히 보여주기만 함
 * -> 사용자 입력 처리나 상태 관리 로직이 없음
 *
 * 구현 방식:
 * 1. count prop을 통해 현재 상태값을 전달받음
 * 2. JSX를 사용하여 count 값을 화면에 렌더링
 * 3. 순수하게 표시 역할만 수행하는 프레젠테이셔널 컴포넌트
 */
const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
