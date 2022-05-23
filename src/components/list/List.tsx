import Item from "./item/Item";
import style from "./_list.module.scss";
import { InterfaceTasks } from "../../types/task";

interface props {
    tasks: InterfaceTasks[],
    selectTask : (selectTask : InterfaceTasks) => void ;
}


function List({tasks, selectTask}: props) {

  return (
    <aside className={style.list}>
        <h2>Estudos do Dia</h2>

        <ul>
            {tasks.map( item =>{
                return(

                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item} //Ja desestruturo todo meu objeto e consigo passar como props
                    />
                     
                )
            })}
        </ul>
    </aside>
  )
}

export default List