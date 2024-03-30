import './App.css';
import { Input } from './Input';
import { Output } from './Output';
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center space-y-4'>
      <Output name={name} />
    <Input name={name} setName={setName} />
    </div>
  );
}

export default App;
