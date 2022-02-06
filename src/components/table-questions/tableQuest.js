import './tableQuest.css';
import Done from '../../elements/don-svg/done';
import Button from '../../elements/button/button-sprint';

const TableQuest = () => {
  return (
    <div className='table-quest'>
      <div className='back-packs'>
        <img src={require("../../assets/picture/backpack.png")} alt="backPack" />
        <img src={require("../../assets/picture/backpack.png")} alt="backPack" />
        <img src={require("../../assets/picture/backpack.png")} alt="backPack" />
        <img src={require("../../assets/picture/backpack.png")} alt="backPack" />
      </div>
      <div className='done-sprint'>
        <Done />
      </div>
      <div className='buttons-sprint'>
        <Button name={'yes'} text={'Yes'}/>        
        <Button name={'no'} text={'No'}></Button>
      </div>
    </div>
  )
}
export default TableQuest;