import "./App.css";
import { SketchPicker } from "react-color";
import { useState } from "react";
function App() {
  const [showPicker, setShowPicker] = useState("#ffffff");

  return (
    <div
      className={`App flex flex-col justify-center items-center h-screen w-screen bg-${showPicker}`}
      style={{ backgroundColor: `${showPicker}` }}
    >
      <h1 className={`font-bold text-center  text-5xl `}>
        Color Picker
      </h1>
      <SketchPicker
        color={showPicker}
        onChange={(color) => setShowPicker(color.hex)}
      />
      <input
        value={showPicker}
        className="text-3xl font-bold bg-black text-white w-[200px] h-[50px] text-center"
      />
    </div>
  );
}

export default App;
