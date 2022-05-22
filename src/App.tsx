import style from "./_App.module.scss";
import { Form, List, StopWatch } from "./components";

function App() {
  return (
    <section className={style.appStyle}>
      <Form/>
      <List/>
      <StopWatch/>
    </section>
  );
}

export default App;
