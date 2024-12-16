import { useState } from "react";

//my code
// function App() {
//   const [color, setColor] = useState("");

//   const changeColor = (k) => {
//     // console.log(k);
//     // console.log(k.target);

//     const newColor = k.target.classList[1];
//     // const newColor = k.target.textContent;;
//     // console.log(newColor);

//     //  const newColor = "pink";
//     setColor(newColor);
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: color }} className="display"></div>
//       <div className="color-panel">
//         <button onClick={changeColor} className="btn red">Red</button>
//         <button onClick={changeColor} className="btn green">Green</button>
//         <button onClick={changeColor} className="btn blue">Blue</button>
//         <button onClick={changeColor} className="btn olive">Olive</button>
//         <button onClick={changeColor} className="btn grey">Grey</button>
//         <button onClick={changeColor} className="btn yellow">Yellow</button>
//         <button onClick={changeColor} className="btn pink">Pink</button>
//         <button onClick={changeColor} className="btn purple">Purple</button>
//         <button onClick={changeColor} className="btn lavender">Lavender</button>
//         <button onClick={changeColor} className="btn white">White</button>
//         <button onClick={changeColor} className="btn black">Black</button>
//       </div>
//     </>
//   );
// }

//chai aur react code
function App() {
  const [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}>Grey</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>

    </div>
  );
}

export default App;


// onClick() wants function not returned value from the function
// onClick(() => setColor("red"))  //right
// onClick(setColor) //right as we are giving reference of funtion
// onClick(setColor()) //wrong, when we () means setColor will return something that onClick() don't want