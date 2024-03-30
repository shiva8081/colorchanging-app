


// import React from 'react'

// export const Output = ({name}) => {
//   return (
//     <div >
   
//      <input 
//      className='border-2 w-96 h-72 border-black' 
//      type='text' 
//      placeholder={name ? name:'empty value'}  
//      style={{backgroundColor:name}}
     
//      />
//     </div>
//   )
// }



  import React from 'react'
  
  export const Output = ({name,hexvalue,text}) => {
    
    return (
      <div className='square' style={{
        backgroundColor:name,
        color:text ?"#000" : "#fff"
        }}> 
        <p> {name ? name:'empty value'}   </p>
        <p> {hexvalue ? hexvalue: null}   </p>
        </div>
    )



   
  }
  Output.defaultProps ={
    name:'empty color value'
}