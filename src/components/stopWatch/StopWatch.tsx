import style from  "./_stopWatch.module.scss";
import Button from "../button/Button"
import Watch from "./watch/Watch";


function StopWatch() {
  return (
    <div className={style.stopWatch}>
        <h3 className={style.title}>Escolha um card e inicie o cronômetro</h3>
        <div className={style.watchWrapper}>
            <Watch/>
        </div>
        <Button>
            Começar
        </Button>
    </div>
  )
}

export default StopWatch