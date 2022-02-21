import { Route, Routes } from "react-router-dom";
import AudioGameField from "./components/audiogame/AudioGameField";
import Main from "./components/pages/Main";
import '../audioCall/AudioCallApp.css'


const AppCallApp = () => {
  return (
  <div className="audio-call-app">
    <Main/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/audio-translate-game/:id" element={<AudioGameField type={'word'}/>}/>
      <Route path="/audio-find-game/:id" element={<AudioGameField  type={'sentence'}/>}/>
    </Routes>
  </div>
  );
}

export default AppCallApp;
