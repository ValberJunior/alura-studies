import style from "./_button.module.scss"


function Button({ children, type } : { children: string, type?: "button" | "submit" | "reset" | undefined }) {

  return (
    <button type={type || "button"} className={style.button}>
        {children}
    </button>
  )
}

export default Button;