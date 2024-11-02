import React, { useState } from 'react'
import './DragAndDrop.css'

const DragandDrop = () => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileArray, setFileArray] = useState([])

  const handleFileDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    const files = event.dataTransfer.files;

    if (files && files.length > 0) {
      let fileNames = []
      Array.from(files).map((file) => fileNames.push(file))  
      setFileArray(fileNames)
      setIsFileUploaded(true)
    }
  };
  
   const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  return (
    <div className='fileDrop'>
      {
        isFileUploaded ? (
          <div className='showFileNamesList'>
            <ul>
              {(fileArray.map((file) => <li>{file.name}</li>))}
            </ul>
          </div>
        )
        : 
        (<div onDrop={handleFileDrop} onDragOver={handleDragOver} className='fileDropMainSection'>
          <div className="dropIcon">
            <div className="dropIconSvg">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload w-12 h-12 text-gray-400 mb-3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>

            </div>
          <h1>Drag & Drop Files Here</h1>
          </div>
        </div>)
      }
    </div>
  )
}

export default DragandDrop