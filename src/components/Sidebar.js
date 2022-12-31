import React from 'react'
import {categories} from '../utils/utility.js'


const Sidebar = ({selectCategory, setSelectCategory}) => {
  return (
    <>
      {categories.map((category, index) => {
        return <button
                 onClick={() => setSelectCategory(category.name)} 
                 key={index} 
                 className="flex p-2 flex-row items-center justify-start sm:py-3 sm:px-4"
                 style={{
                     backgroundColor: selectCategory === category.name ? "red" : "",
                     color: selectCategory === category.name ? "white" : "black",
                    }}
                 >
                    <span className='mr-2'>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
      })}
    
    </>
  )
}

export default Sidebar