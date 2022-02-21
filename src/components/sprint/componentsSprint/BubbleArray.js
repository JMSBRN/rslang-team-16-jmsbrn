 const BubbleArray = (props) => {
    const indexBubble = props.indexBubble;
    let key = 0;
    const bubbles = [];
    for (let i = 1; i <= indexBubble; i++) {
      bubbles.push(<img key={key} src={require("../assets/picture/bubble_2.png")} alt="bubble" />);
      key = i;
    } 
    return bubbles;
  };
  export default BubbleArray;