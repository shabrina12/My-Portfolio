import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active 
    ? "text-[#391400] border-b border-[#EF6C57]" 
    : "text-slate-600"
  
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>
            {children}
        </p>        
    </button>
  )
}

export default TabButton