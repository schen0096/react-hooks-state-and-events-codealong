import React, { useState } from "react";

function Toggle() {

  const [ isOn, setIsOn ] = useState(false)

  function handleIsOn(){
    setIsOn(!isOn)
  }

  const color = isOn ? "red" : "yellow"

  return <button 
          style={{background: color}}
          onClick = {handleIsOn}>
    {isOn ? 'ON' : 'OFF'}
    </button>;
}

export default Toggle;
