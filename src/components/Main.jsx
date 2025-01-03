import "./Main.css";
import Component from "./section-01/chapter-01/Component";
import Rendering from "./section-01/chapter-02/Rendering";
import ButtonProps from "./section-01/chapter-03/ButtonProps";
import Counter from "./section-01/chapter-04/Counter";
import Bulb from "./section-01/chapter-05/Bulb";
import Register from "./section-01/chapter-06/Register";

const Main = () => {
  return (
    <main>
      <Component />
      <Rendering />
      <ButtonProps />
      <Counter />
      <Bulb />
      <Register />
    </main>
  );
};

export default Main;
