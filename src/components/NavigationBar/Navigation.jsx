import React, { useState } from 'react'
import Popup from './pop-up/popup';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [showPopup, setShowPopup] = useState(false);

  function  onUploadClick(){
    setShowPopup(true)
  }

  function onPasteClick(){
    <NavLink to="\paste"></NavLink>
  }

  return (
    <>
    <div className='nav-bar'>
        <div className="brand-name-and-logo">
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-code2 w-8 h-8 text-blue-500">
        <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
        </svg>

        <span><h1>Code Share</h1></span>
        </div>
        
        <div className="upload-button">
            <button onClick={onUploadClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                <p>Upload Code</p>
            </button>
        </div>
        
        <NavLink to="/paste" className={"upload-button"} style={{ textDecoration: "none"}}>
            <button onClick={onPasteClick}>
                <p>Paste Code</p>
            </button>
        </NavLink>
    </div>

    {
        showPopup ? <Popup setShowPopup={setShowPopup}/> : null
    }
    </>
  )
}

export default Navigation