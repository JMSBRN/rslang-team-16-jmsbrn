import { Route, Routes } from "react-router-dom";
import AudioGameField from "./components/audiogame/AudioGameField";
import Main from "./components/pages/Main";



const AppCallApp = () => {
  return (
    <>
    <Main/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/audio-translate-game/:id" element={<AudioGameField type={'word'}/>}/>
      <Route path="/audio-find-game/:id" element={<AudioGameField  type={'sentence'}/>}/>
    </Routes>
    </>
  );
}

export default AppCallApp;
