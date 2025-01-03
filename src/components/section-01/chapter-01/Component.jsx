/**
 * 컴포넌트 사용하기
 * -> 컴포넌트 생성
 * -> 컴포넌트 사용
 */

// 컴포넌트 생성
import Header from "./Header";
import Footer from "./Footer";

const Component = () => {
  return (
    <section>
      <h2>컴포넌트 사용</h2>
      {/* 컴포넌트 사용 */}
      <Header />

      <main>
        <h3>Main</h3>
      </main>

      {/* 컴포넌트 사용 */}
      <Footer />
    </section>
  );
};

export default Component;
