import './App.css';
import { Input } from './Input';
import { Output } from './Output';
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [hexvalue, sethexvalue] = useState("");
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center space-y-4'>
      <Output name={name} hexvalue={hexvalue}/>
    <Input name={name} setName={setName} sethexvalue={sethexvalue} />
    </div>
  );
}

export default App;
