import React, {useState} from 'react'
import './popup.css'
import languages from "./languages"
import Title from './Title'
import FullScreenOverlay from './full-screenOverlay/fullScreenOverlay'
import SubmitButton from './SubmitButton'
import { useForm } from "react-hook-form";
import DragandDrop from './DragandDrop'

const Fileupload = ({setShowPopup}) => {
const { register, handleSubmit, watch, formState: { errors }} = useForm();


 function handleCloseButton(){
    setShowPopup(false);
 }

 const [lang, setLang] = useState("Python");

  const handleLangSelected = (event) => {
    setLang(event.target.value)
    alert(event.target.value)
  }

  return (
    <>  
    <FullScreenOverlay />
        <div className='pop-up'>
            <div className='pop-up-heading'>
              <span>Upload Code File</span>
              <button className='close-button' onClick={handleCloseButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-5 h-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
            </div>

           <div className='form'>
           <form onSubmit={handleSubmit}>
           <Title titleText={"Your Username"}/>
           <input type="text" className='usernameInput' spellCheck="false" {...register("userName")}/>
           <Title titleText={"Programming Language"}/>

              <select onChange={handleLangSelected} {...register("language")} className='language'>
                { languages.map((lang) => <option value={lang}>{lang}</option> ) }
              </select>
        
            <DragandDrop/>
            <SubmitButton setShowPopup={setShowPopup} userName={watch("userName")} langSelected={watch("language")}/>
           </form>
           </div>
        </div>
        
    </>
  )
}

export default Fileupload