import style from "./_App.module.scss";
import { Form, List, StopWatch } from "./components";
import { useState } from "react";
import { InterfaceTasks } from "./types/task";

function App() {

const [ tasks, setTasks ] = useState<InterfaceTasks[] | []>([]);
const [selected, setSelected] = useState<InterfaceTasks>();

const selectTask = (selectedTask :InterfaceTasks ) => {
  setSelected(selectedTask);

  setTasks((allTasks) =>
    allTasks.map((task) => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    }))
  );
}

  return (
    <section className={style.appStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
        />
      <StopWatch selected={selected}/>
    </section>
  );
}

export default App;
