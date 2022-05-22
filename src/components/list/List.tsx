import Item from "./item/Item";
import style from "./_list.module.scss";


function List() {

const tasks = [{
    task: "React",
    time: "02:00:00",
    id: 1
},{
    task: "Javascript",
    time: "01:00:00",
    id: 2
},
{
    task: "Typescript",
    time: "03:00:00",
    id: 3
}];

  return (
    <aside className={style.list}>
        <h2>Estudos do Dia</h2>

        <ul>
            {tasks.map( item =>{
                return(

                    <Item 
                        {...item} //Ja desestruturo todo meu objeto e consigo passar como props
                    />
                     
                )
            })}
        </ul>
    </aside>
  )
}

export default List