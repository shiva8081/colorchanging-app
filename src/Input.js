
import React from 'react'

export const Input = ({name,setName}) => {
    
  return (
    <div>

<form onSubmit={(e)=>e.preventDefault()}>
     {/* <label>add color name:</label> */}
        <input className='border-2 border-black w-96 h-11 '
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='enter the color name'
        />
      
    </form>


    </div>
  )
}
