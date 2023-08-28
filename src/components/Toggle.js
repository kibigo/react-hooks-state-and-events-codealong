import { useState } from "react";
import React from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  const ButtonOn = () => {
    setIsOn(!isOn)
  }

  const color = isOn? 'red' : 'white'

  return (
    <div style={{background:color}}>
      <button onClick={ButtonOn}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default Toggle;
