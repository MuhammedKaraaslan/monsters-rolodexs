import React from 'react'
import './SearchBox.style.css'

export default function SearchBox({placeholder, handleChange}) {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={handleChange}/>
    )
}
