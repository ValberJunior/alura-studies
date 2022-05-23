import { InterfaceTasks } from "../../../types/task";
import style from "../_list.module.scss";

interface props extends InterfaceTasks {
  selectTask : (selectTask : InterfaceTasks) => void ;
}

function Item({task, time, selected, completed, id, selectTask} : props ) {
  return (
      
    <li 
      key={id}
      className={`${style.item} ${selected ? style.selectedItem : " "} `}
      onClick={
        ()=>selectTask(
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
    </li>
  )
}

export default Item