import style from  "./_stopWatch.module.scss";
import Button from "../button/Button"
import Watch from "./watch/Watch";
import { timeToSeconds } from "../../common";
import { InterfaceTasks } from "../../types/task";
import { useEffect, useState } from "react";

interface props {
  selected : InterfaceTasks | undefined,
  finishTask: () => void
}

function StopWatch({selected, finishTask}: props) {

  const [ time, setTime ] = useState<number>();

  useEffect(()=>{

    if(selected?.time){
      setTime(timeToSeconds(selected?.time))
    }

  },[selected]);

  const regressive = (i: number = 0) =>{
      setTimeout(() => {
        if(i > 0){
          setTime( i-1 );
          return regressive(i - 1);
        }

        finishTask()
        
      }, 1000);
  }

  return (
    <div className={style.stopWatch}>
        <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
        <div className={style.watchWrapper}>
            <Watch time={time}/>
        </div>
        <Button onClick={()=>{regressive(time)}}>
            Começar
        </Button>
    </div>
  )
}

export default StopWatch