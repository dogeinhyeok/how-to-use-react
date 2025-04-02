import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 3. 언마운트: 컴포넌트가 언마운트될 때 호출
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Even</div>;
};

export default Even;
