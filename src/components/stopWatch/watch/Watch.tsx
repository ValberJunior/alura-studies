import style from "./_watch.module.scss";

interface props{
  time: number | undefined;
}

function Watch({time = 0}: props) {

  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  const [minutesTen, minutesUnit] = String(minutes).padStart(2,"0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2,"0");

  return (
    <>
        <span className={style.watchNumber}>{minutesTen}</span>
        <span className={style.watchNumber}>{minutesUnit}</span>
        <span className={style.watchDivider}>:</span>
        <span className={style.watchNumber}>{secondsTen}</span>
        <span className={style.watchNumber}>{secondsUnit}</span>
    </>
  )
}

export default Watch