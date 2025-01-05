import "./Main.css";
import Component from "./section-01/chapter-01/Component";
import Rendering from "./section-01/chapter-02/Rendering";
import ButtonProps from "./section-01/chapter-03/ButtonProps";
import Counter from "./section-01/chapter-04/Counter";
import Bulb from "./section-01/chapter-05/Bulb";
import Register from "./section-01/chapter-06/Register";
import HookExam from "./section-01/chapter-07/HookExam";
import SimpleCounterApp from "./section-02/SimpleCounterApp";
import TodoListApp from "./section-03/TodoListApp";

const Main = () => {
  return (
    <main>
      {/* Section 01 */}
      {/* <Component />
      <Rendering />
      <ButtonProps />
      <Counter />
      <Bulb />
      <Register />
      <HookExam /> */}
      {/* Section 02 */}
      {/* <SimpleCounterApp /> */}
      {/* Section 03 */}
      <TodoListApp />
    </main>
  );
};

export default Main;
