import './header.css';
import Button from '../../elements/button/button-sprint';
import { fullScreen } from '../../elements/button/functions';


const HeaderSprint = () => {
  return (
    <div className='header-sprint'>
      <img src={require("../../assets/picture/bubble_2.png")} alt="bubble" />
      <img src={require("../../assets/picture/bubble_2.png")} alt="bubble" />
      <img src={require("../../assets/picture/bubble_2.png")} alt="bubble" />
      <img src={require("../../assets/picture/bubble_2.png")} alt="bubble" />
      <Button name={'full-screen'} text={'Full screen'} click={fullScreen}/>
    </div>
  )
} 
export default HeaderSprint