import './tableQuest.css';
import Done from '../../elements/don-svg/done';
import ButtonSprint from '../../elements/button/button-sprint';
import BackPackArray from '../BackPackArray';
import React, {useState, useEffect} from 'react'



const TableQuest = () => {
  
  let [doneClassName, setDoneClassName] = useState('done-sprint');
  let [doneColor, setDoneColor] = useState('red'); 

  const clickYes = () => {    
    doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('green');
      closure();
    }else {
      setDoneColor('red');
    }
  }
  
  const closure = () => {
    let speedIndex = +sessionStorage.getItem('speedIndex');
    speedIndex ? speedIndex++ : (speedIndex = 1);
    let indexSpeedSprint = +sessionStorage.getItem('indexSpeedSprint');
    if (!indexSpeedSprint) indexSpeedSprint = 4;
    // console.log(indexSpeedSprint)
    if (speedIndex > 3) {
      if (indexSpeedSprint > 1) indexSpeedSprint--;
      speedIndex = 0;
    } 
    sessionStorage.setItem('indexSpeedSprint', indexSpeedSprint)
    sessionStorage.setItem('speedIndex', speedIndex);
    // sessionStorage.removeItem('speedIndex');
  };
  
  const clickNo = () => {
  doneClassName = 'done-sprint active';
    setDoneClassName(doneClassName)
    setTimeout(() => {
      setDoneClassName('done-sprint') 
    }, 400)
    const indexWord = sessionStorage.getItem('indexWord');
    const randomIndex = sessionStorage.getItem('randomIndex');
    if (indexWord === randomIndex) { 
      setDoneColor('red');
    }else {
      setDoneColor('green');
      closure();
    }
  }
  let indexSpeedSprint = sessionStorage.getItem('indexSpeedSprint');
  // console.log(indexSpeedSprint);
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
        <ButtonSprint name={'yes'} text={'Yes'} click={clickYes} />        
        <ButtonSprint name={'no'} text={'No'} click={clickNo} />
      </div>
    </div>
  )
}
export default TableQuest;


