import style from "./_button.module.scss"


function Button({ children } :any) {
  return (
    <button className={style.button}>
        {children}
    </button>
  )
}

export default Button;