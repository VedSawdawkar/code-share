import React from 'react'
import "./SubmitButton.css"
import { toast } from 'react-toastify';

const SubmitButton = ({setShowPopup, userName,  langSelected}) => {
  function onSubmit(data){
    console.log("Username: ", userName);
    console.log("language: ", langSelected);
    
    if(!userName || userName.length <3){
      const toastId = "username-toast"
      if (!toast.isActive(toastId)) {
        return toast.warn("User name should be atleast 3 characters long", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                toastId: toastId
                })}
    }else{
      setShowPopup(false)
    }
  }

  return (
    <div className='submit-button-style'>
      <button onClick={onSubmit} type='button'>
        <p>Submit</p>
    </button>
    </div>
  )
}

export default SubmitButton