const Button = ({click, name, text}) => {
return (
  <>
  <button onClick={click} className={name}>{text}</button>
  </>
)
};
export default Button;