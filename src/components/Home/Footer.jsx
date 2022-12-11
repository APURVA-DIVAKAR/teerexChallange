

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <Link to='/' className='Logo' > 
           <h1> TeeRex Store</h1>
           <h3>A solution for Clothing</h3>
         </Link>
    </div>
  )
}

export default Footer