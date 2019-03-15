import React from 'react'

function SideHeader() {
  return (
    <div>
       <div className="">
        <div className="input-field">
          <input  type="text" id="search"  className="search" />
          <label htmlFor="email">search</label>
            <span className=" search_btn">
             <i className="material-icons">search</i>
            </span>
          </div>
        </div>
    
    </div>
  )
}

export default SideHeader
