import './mainCss.css';
import TableQuest from '../../table-questions/tableQuest';

const MainCenter = () => {

  

  return (
    <div className='main-sprint'>
      <div className='main-line'>
      <img src={require("../../../assets/picture/pose_11.png")} alt="man" />
      <img className='roller' src={require("../../../assets/picture/pose_7.png")} alt="man" />
      <img src={require("../../../assets/picture/pose_4.png")} alt="man" />
    </div>
    <TableQuest />
    </div>
  )
}
export default MainCenter;