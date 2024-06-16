import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleshow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleshow(true);
        } else {
            handleshow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);

    },[])

  return (
    <div className={`nav ${show && `nav_black`}`}>
        <div className='nav_contents'>
            <img 
            className='nav_logo'
            src= 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt=''/>

            <img 
            className='nav_avatar'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
            alt=''/>
        </div>
        
    </div>
  )
}

export default Nav
