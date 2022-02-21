import { useState } from "react";
import AudioGameField from "../audiogame/AudioGameField";
import AudioGameNav from "../AudioGameNav";



const AudioTranslateGame = () => {
  const [star, setStar] = useState(5)
  return (
    <>
        <AudioGameNav star={star}/>
        <AudioGameField setStar={(s)=>setStar(s)}  star={star}/>
    </>
  )
};

export default AudioTranslateGame;
