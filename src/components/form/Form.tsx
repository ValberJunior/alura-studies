import style from "./_form.module.scss";
import Button from '../button/Button';
import React, { useState } from "react";
import { InterfaceTasks } from "../../types/task";
import { v4 as uuid24 } from "uuid";

function Form({setTasks}:{setTasks: React.Dispatch<React.SetStateAction<InterfaceTasks[]>>}) {

    const [task,setTask]= useState("");
    const [time, setTime] = useState("00:00");


    //add Task
    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTasks(tasks=>[...tasks,{task: task, time: time, selected: false, completed: false, id: uuid24()}])
        //reset form
        setTask("");
        setTime("00:00");

    }


  return (
        <form className={style.newTask} onSubmit={(e)=>{addTask(e)}}>

            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input
                 type="text"
                 name="task"
                 id="task"
                 value={task}
                 onChange={(e)=>{setTask(e.target.value)}}
                 placeholder="O que você quer estudar"
                 required
                 />   
            </div>
            
            <div className={style.inputContainer}>
            <label htmlFor="time">
                Tempo
            </label>
                <input
                 type="time"
                 step="1"
                 name="time"
                 value={time}
                 onChange={(e)=>{setTime(e.target.value)}}
                 id="time"
                 min="00.00.00"
                 max="10:00:00"  //custom
                 required
                 />
            </div>

            <Button type="submit">
                Adicionar
            </Button>

        </form>
  )
}

export default Form