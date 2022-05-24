import { InterfaceTasks } from "../../../types/task";
import style from "./_item.module.scss";

interface props extends InterfaceTasks {
  selectTask : (selectTask : InterfaceTasks) => void ;
}

function Item({task, time, selected, completed, id, selectTask} : props ) {
  return (
      
    <li 
      key={id}
      className={`${style.item} ${selected ? style.selectedItem : " "}
       ${completed ? style.completedItem : " "}`}
      onClick={
        ()=> !completed && selectTask(
          {
            task,
            time,
            selected,
            completed,
            id,        
           }
        )
      }
      >
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && <span className={style.concluded} arial-label="completed task"></span>}
    </li>
  )
}

export default Item