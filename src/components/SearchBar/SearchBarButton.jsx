import React, { useEffect, useState } from 'react'

const SearchBarButton = (props) => {
  const defaultButtonStyle = {
    cursor: "pointer",
    border: "none",
    padding: "20px",
    borderRadius: "inherit",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    color: "black",
    fontSize: "xx-large"
  }

  // const buttonStyleOnMouseOver =  {
  //   border: "2px dashed grey",
  //   cursor: "pointer",
  //   padding: "20px",
  //   borderRadius: "inherit",
  //   backgroundColor: "rgb(232, 232, 214)",
  //   color: "black",
  //   height: "100%",
  //   width: "100%",
  //   fontSize: "xx-large"
  // }

  const buttonSelectedStyle = {
    ...defaultButtonStyle,
    color: "white",
    backgroundColor: "rgb(59, 130, 246)"
  }

  const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle)
  
  useEffect(() => {
    const buttonName = props.name;
    if (props.selectedButton === buttonName) {
      setButtonStyle(buttonSelectedStyle);
    } else {
      setButtonStyle(defaultButtonStyle);
    }
  }, [props.selectedButton, props.name]); // This useEffect will run whenever selectedButton or name changes

  function handleClick(event) {
    const buttonName = event.target.value;
    props.setSelectedButton(buttonName);
  }

  return (
    <div style={{color: "white", borderRadius: "20px"}}>
        <button style={buttonStyle} 
                // onMouseOver={()=> setButtonStyle(buttonStyleOnMouseOver)}
                // onMouseOut={()=> setButtonStyle(defaultButtonStyle)}
                value={props.name}
                onClick={handleClick}
        >
            {props.name}
        </button>
    </div>
  )
}

export default SearchBarButton