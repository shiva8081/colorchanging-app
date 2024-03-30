
import React from 'react'

export const Input = ({name,setName,sethexvalue}) => {
    
  return (
    <div>

<form onSubmit={(e)=>e.preventDefault()}>
     {/* <label>add color name:</label> */}
        <input className='border-2 border-black w-[400px] h-11 '
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='enter the color name'
        />
      
    </form>


    </div>
  )
}
