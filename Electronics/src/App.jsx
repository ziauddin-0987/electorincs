import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const inptusRff = useRef(inpurt)
  function inpus() {
    const inptusRff = useRef(inpurt);
    return (inptusRff.style.border = "none");
  }
  return (
    <>
      <div className="reactForm">
        <form>
          <label htmlFor="karaya">کرایہ دار کا نام </label>
          <br />
          <input type="text" placeholder="کرایہ دار کا نام " id="karaya" />
          <br />
          <label htmlFor="homeAddras">گھر کا پتہ </label>
          <br />
          <input type="text" placeholder="گھر کا پتہ " id="homeAddras" />
          <br />
          <label htmlFor="homeAddras">پہلا ضامن </label>
          <br />
          <input type="text" placeholder="پہلا ضامن " id="homeAddras" />
          <br />
          <label htmlFor="homeAddras">گھر کا پتہ </label>
          <br />
          <input type="text" placeholder="گھر کا پتہ " id="homeAddras" />
          <br />
          <label htmlFor="homeAddras">دوسرا ضامن </label>
          <br />
          <input type="text" placeholder="دوسرا  ضامن " id="homeAddras" />
          <br />

          <label htmlFor="homeAddras">گھر کا پتہ </label>
          <br />
          <input type="text" placeholder="گھر کا پتہ " id="homeAddras" />
          <br />
        </form>
      </div>
    </>
  );
}

export default App;
