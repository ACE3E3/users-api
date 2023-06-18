import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Posts() {
  const location = useLocation();
  const data = location.state?.data
  return (
    <div style={{display:'flex'}}>
    <div className='sidebar'>
        <div className='options'>
              <Link className='allLinks' to='/user' state={{data: data}}><p className='option-item'>Profile</p></Link>
            <hr className="solid" />
            <br />
              <h1 style={{color:"white"}}>Posts</h1>
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/gallery' state={{data: data}}><p className='option-item'>Gallery</p></Link>
            
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/todo' state={{data: data}}><p className='option-item'>ToDo</p></Link>
            
            <hr className="solid" />
        </div>
    </div>
    <div className='coming_soon'>Coming Soon</div>
    </div>
  )
}

export default Posts