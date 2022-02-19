  export const closure = () => {
    let speedIndex = +sessionStorage.getItem('speedIndex');
    speedIndex ? speedIndex++ : (speedIndex = 1);
    let indexSpeedSprint = +sessionStorage.getItem('indexSpeedSprint');
    if (!indexSpeedSprint) indexSpeedSprint = 4;
    if (speedIndex > 3) {
      if (indexSpeedSprint > 1) indexSpeedSprint--;
      speedIndex = 1;
    } 
    sessionStorage.setItem('indexSpeedSprint', indexSpeedSprint)
    sessionStorage.setItem('speedIndex', speedIndex);
  };

  export const badAnswers = () => {
    let indexBadAnswers = +sessionStorage.getItem('indexBadAnswers');
    indexBadAnswers ? indexBadAnswers++ : (indexBadAnswers = 1);
    let indexBubble = +sessionStorage.getItem('indexBubble');
    if (!indexBubble) indexBubble = 4;
    if (indexBadAnswers > 3) {
      if (indexBubble > 1) indexBubble--;
      indexBadAnswers = 1;
    } 
    sessionStorage.setItem('indexBubble', indexBubble)
    sessionStorage.setItem('indexBadAnswers', indexBadAnswers);
  }

  export const calcSprint = () => {
    let calcIndex = sessionStorage.getItem('calcIndex');
    calcIndex ? calcIndex++ : calcIndex = 1;    
    const resultSprint = calcIndex * 80;
    localStorage.setItem('resultSprint', resultSprint); 
    sessionStorage.setItem('calcIndex', calcIndex);
  }

  