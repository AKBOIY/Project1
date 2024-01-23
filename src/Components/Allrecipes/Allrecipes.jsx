import React from 'react'
import "./Allrecipes.css"
import { FaSearch } from "react-icons/fa";

const Allrecipes = () => {
    return (
        <>
        <div className='recipebody'>
            <div className='uprecipe'>
                <div className='uprecipepix'>
                </div>
                <div className='recipebodyinput'>
                    <div className='recipebodyinputin'>
                    <FaSearch />
                    <input type="text" name="" id="" placeholder="SEARCH ALL RECIPES"/>
                    </div>
                    <button>Search</button>
                </div>
                <div className='downrecipe'>
                    
                </div>

            </div>
        

            
        </div>
        </>
    )
}

export default Allrecipes; 
