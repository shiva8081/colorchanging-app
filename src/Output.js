import React from 'react'

export const Output = ({name}) => {
  return (
    <div style={{backgroundColor:name}}>
   
     <input 
     className='border-2 w-96 h-72 border-black' 
     type='text' 
     placeholder={name ? name:'empty value'}  
     
     />
     
     






    </div>
  )
}
//   import React from 'react'
  
//   export const Output = ({name}) => {
    
//     return (
//       <div className='square' style={{backgroundColor:name}}> 
//         <p> {name ? name:'empty value'}   </p>
//         </div>
//     )



   
//   }
//   Output.defaultProps ={
//     name:'empty color value'
// }