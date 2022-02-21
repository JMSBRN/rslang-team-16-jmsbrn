import './tableQuest.css';
import Done from '../../elements/don-svg/done';
import ButtonSprint from '../../elements/button/button-sprint';
import BackPackArray from '../BackPackArray';
import urlYes from '../../assets/mp3/yes.mp3';
import React, {useState } from 'react';
import urlNo from '../../assets/mp3/no.mp3';
import { closure, badAnswers, calcSprint, keyboardSprint } from '../../constants/constants';



const TableQuest = () => {  
  let [doneClassName, setDoneClassName] = useState('done-sprint');
  let [doneColor, setDoneColor] = useState('red');
  
  const [audioSprintNo] = useState(new Audio(urlNo));
  const [audioSprintYes] = useState(new Audio(urlYes));
  
  const soundSprint = (yesNo) => {
    (yesNo === 'yes') ? audioSprintYes.play() : audioSprintNo.play();   
  }
 
  const clickYes = () => { 
    sessionStorage.setItem('disabledYes', true);   
    sessionStorage.setItem('disabledNo', true);   
    doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('green');
      soundSprint('yes');
      calcSprint();
      closure();
    }else {
      setDoneColor('red');
      badAnswers();
      soundSprint('no')
    }
  }
  
    document.addEventListener('keydown', (e) => {
      if (e.key === '4' ) {
        clickYes()
      }else if(e.key === '6') {
        clickNo()
      }
    })

  const clickNo = () => {

    sessionStorage.setItem('disabledYes', true) 
    sessionStorage.setItem('disabledNo', true) 
    doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('red');
      badAnswers();
      soundSprint('no')
    }else {
      setDoneColor('green');
      soundSprint('yes');
      calcSprint();
      closure();
    }
  }

  let indexSpeedSprint = sessionStorage.getItem('indexSpeedSprint');
  let disabledYes = Boolean(sessionStorage.getItem('disabledYes'));
  let disabledNo = Boolean(sessionStorage.getItem('disabledNo'));


  

  return (
    <div className='table-quest'>
      <div className='back-packs'>
       <BackPackArray indexSpeedSprint={
         !indexSpeedSprint ? indexSpeedSprint = 4 : indexSpeedSprint
        }/>
      </div>
      <div className={doneClassName}>
        <Done doneColor={doneColor} />
      </div>
      <div className='buttons-sprint'>
        <ButtonSprint name={'yes'} text={'Yes'} click={clickYes} disabled={!disabledYes ? disabledYes = false : disabledYes}/>        
        <ButtonSprint name={'no'} text={'No'} click={clickNo} 
        disabled={!disabledNo ? disabledNo = false : disabledNo}/>
      </div>
    </div>
  )
}
export default TableQuest;


