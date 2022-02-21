const ButtonSprint = (props) => {
return (
  <>
  <button onClick={props.click} className={props.name} disabled={props.disabled}>{props.text}</button>
  </>
)
};
export default ButtonSprint;