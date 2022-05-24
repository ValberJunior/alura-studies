import style from "./_button.module.scss"


function Button({ children, type, onClick } : { children: string, type?: "button" | "submit" | "reset" | undefined , onClick? : ()=> void}) {

  return (
    <button onClick={onClick} type={type || "button"} className={style.button}>
        {children}
    </button>
  )
}

export default Button;