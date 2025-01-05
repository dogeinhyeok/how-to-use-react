import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) => todo.content.toLowerCase().includes(search));
  };

  const filteredData = useMemo(getFilteredData, [todos, search]);

  /**
   * useMemo 훅 사용 설명
   * -> 컴포넌트가 리렌더링될 때마다 모든 계산을 다시하면 성능이 안좋아질 수 있음
   * -> useMemo는 이전에 계산한 값을 재사용할 수 있게 해주는 훅
   *
   * 예시로 설명하면:
   * -> todos 배열이 [1,2,3]이고 첫 렌더링에서 개수를 계산했다면
   * -> todos가 변경되지 않은 두 번째 렌더링에서는 다시 계산하지 않고
   * -> 이전에 계산해둔 개수를 그대로 사용
   *
   * 사용 방법:
   * -> useMemo(() => {계산할_내용}, [바뀌는_값들])
   * -> [바뀌는_값들]이 바뀔 때만 계산할_내용을 다시 계산하고, 그 외에는 이전 값 재사용
   *
   * 단점:
   * -> 계산 결과를 메모리에 저장해두기 때문에 메모리를 추가로 사용합니다
   * -> 단순한 계산의 경우 메모리 사용이 더 비효율적일 수 있습니다
   */
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // 전체 할 일 개수
    const totalCount = todos.length;
    // 완료된 할 일 개수
    const doneCount = todos.filter((todo) => todo.isDone).length;
    // 미완료된 할 일 개수
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos-wrapper">
        {filteredData.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
