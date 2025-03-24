// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color1, setColor1]=useState("false");
  const [color2, setColor2]=useState("false");
  const [color3, setColor3]=useState("false");
  const [color, setColor]=useState("");

  return (
    <>
    <div class="con">
    <div class="container">
        <div><h1>Traffic Light</h1></div>
        <div class="out-side">
            <div className={color=="color1"? "circle circle1 red":"circle red"} class="circle"></div>
            <div className={color=="color2"? "circle circle2 yellow":"circle yellow"} class="circle" ></div>
            <div className={color=="color3"? "circle circle3 green":"circle green"} class="circle"></div>
        </div>
        </div>
        <div class="stand"></div>
    </div>
    <div class="button">
    <button className="stop" onClick={()=>setColor("color1")}>Stop</button>
    <button className="ready" onClick={()=>setColor("color2")}>Ready</button>
    <button className="go" onClick={()=>setColor("color3")}>GO</button>
    </div>
</>


  );
  
}

export default App;
