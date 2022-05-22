import style from "../_list.module.scss";

function Item({task, time, id} : {task: string, time: string, id: number}) {
  return (
      
    <li key={id} className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
  )
}

export default Item