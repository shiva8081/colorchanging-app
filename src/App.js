import './App.css';
import { Input } from './Input';
import { Output } from './Output';
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [hexvalue, sethexvalue] = useState("");
  const [text, settext] = useState(true);
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center space-y-4'>
      <Output name={name} hexvalue={hexvalue} text={text} />
    <Input name={name} setName={setName} sethexvalue={sethexvalue} text={text} settext={settext} />
    </div>
  );
}

export default App;
