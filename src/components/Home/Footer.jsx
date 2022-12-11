

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  let navigate = useNavigate()
  return (
    <div>
         
         <footer className={styles.footerpin}>
         <Link to='/' className='Logo' > 
           <h2  className='Logo'> TeeRex Store </h2>          
         </Link>
        </footer>
        
    </div>
  )
}

export default Footer