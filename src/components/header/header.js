import './header.css';
import ButtonSprint from '../../elements/button/button-sprint';
import { fullScreen } from '../../elements/button/functions';
import BubbleArray from '../BubbleArray';

const HeaderSprint = () => {
  let indexBubble = +sessionStorage.getItem('indexBubble')
  return (
    <>
     <div className='header-sprint'>
      <BubbleArray indexBubble={
      !indexBubble ? indexBubble = 4 : indexBubble
      }/> 
      <ButtonSprint name={'full-screen'} text={'Full screen'} click={fullScreen}/>
    </div>
    <p className='headerSprinttext'>80 баллов за слово</p>
    </>
   
  )
} 
export default HeaderSprint