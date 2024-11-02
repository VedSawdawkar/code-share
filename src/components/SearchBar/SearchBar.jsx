import React from 'react'
import './SearchBar.css'
import SearchBarButton from "./SearchBarButton"
import languages from "../NavigationBar/pop-up/languages"

const SearchBar = (props) => {
    const allLanguages = ["All", ...languages]
  return (
    <div className='searchBar'>
        <ul>
            <li>
            {
                allLanguages.map((lang) =><SearchBarButton name={lang} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton} />)
            }
            </li>
        </ul>
    </div>
  )
}

export default SearchBar