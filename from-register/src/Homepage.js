import React from 'react'

import { Link } from 'react-router-dom'
import "./style/homepage.css"

function Homepage() {
   
  return (
   <>
       
        <div>
                       
         <div className='class-1'>
         <button className='button-link'><Link to="/form" className='link'>MyForm</Link></button>
         </div>

         <div className='class-1'>
         <button className='button-link'><Link to="/calculater" className='link'>Calculater</Link></button>
         </div>
    </div>
    </>  
               
      
   
  )
}

export default Homepage