
import "./global.css"
import { Message } from "./components/message/messages";
import { data } from "./data";
import { useState } from "react";

function App() {

  const [counter,setCounter] = useState(0)

  function increase(){
    setCounter(counter + 1) 
  }

  return (
    <div>
      {
        data.map((info)=>{
          return(
          <Message informationMessage={info}/>
          )
        })
      }

      <div>
        counter
        <div>
        {counter}
        <button onClick={increase} className="styleButton">Sumar + 1</button>

        </div>
      </div>
    </div>
  );
}


export default App;

// 1. Crear un archivo .js donde dejen data de prueba para utilizar y recorrer
// 2. Creación de componentes funcionales
// 3. Aplicar la comunicación entre componentes
// 4. La cantidad de componentes a crear es libre
// 5. Definiciones a utilizar: useState, callbacks, css module, map, render props. 