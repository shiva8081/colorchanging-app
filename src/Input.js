
import React from 'react'
import colorNames from 'colornames';

export const Input = ({name,setName,sethexvalue,text,settext}) => {
    
  return (
    <div >

<form onSubmit={(e)=>e.preventDefault()} className='flex flex-col space-y-3'>
     {/* <label>add color name:</label> */}
        <input className='border-2 border-black w-[400px] h-11  '
          type="text" 
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            sethexvalue(colorNames(e.target.value));
          }}
          placeholder='enter the color name'
        />
      <button className="border-2 border-black" type='submit' onClick={()=>settext(!text)} > togle text</button>

        
    </form>


    </div>
  )
}
