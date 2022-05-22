import style from "./_App.module.scss";
import { Form, List } from "./components";

function App() {
  return (
    <section className={style.appStyle}>
      <Form/>
      <List/>
    </section>
  );
}

export default App;
