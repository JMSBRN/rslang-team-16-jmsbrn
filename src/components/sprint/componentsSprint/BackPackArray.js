 
 const BackPackArray = (props) => {
    const indexSpeedSprint = props.indexSpeedSprint;
    let key = 0;
    const backPacks = [];
    for (let i = 1; i <= indexSpeedSprint; i++) {
      backPacks.push(<img key={key} src={require("../assets/picture/backpack.png")} alt="backPack" />);
      key = i;
    } 
    return backPacks;
  };
  export default BackPackArray;