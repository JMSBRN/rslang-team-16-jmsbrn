import { useState } from "react";
import AudioGameNav from "../AudioGameNav";
import AudioGameField from "../audiogame/AudioGameField";

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
