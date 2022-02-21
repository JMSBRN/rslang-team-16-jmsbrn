import './mainCss.css';
import React, { useState, useContext, useEffect } from 'react';
import TableQuest from '../table-questions/tableQuest';


const MainCenter = (props) => {
  const sprintResult = localStorage.getItem('resultSprint');
  return (
    <div className='main-sprint'>
      <h2 className='sprint-result'>вы набрали {sprintResult} баллов</h2>
      <div className='word-flex'>
        <h1 className='word'>
          {props.myWord} {props.myWordTranslate}
        </h1> 
      </div>
      <div className='main-line'>
      <img src={require("../../assets/picture/pose_11.png")} alt="man" />
      <img className='roller' src={require("../../assets/picture/pose_7.png")} alt="man" />
      <img src={require("../../assets/picture/pose_4.png")} alt="man" />
    </div>
    <TableQuest />
    </div>
  )
}
export default MainCenter;