import "./Header.css";
import { memo } from "react";

/**
 * Header 컴포넌트
 * -> 현재 날짜를 표시하는 컴포넌트
 * -> memo로 감싸서 불필요한 리렌더링 방지
 */
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
