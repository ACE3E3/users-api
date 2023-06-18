import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Gallery() {
  const location = useLocation();
  const data = location.state?.data
  return (
    <div style={{display:'flex'}}>
    <div className='sidebar'>
        <div className='options'>
              <Link className='allLinks' to='/user' state={{data: data}}><p className='option-item'>Profile</p></Link>
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/posts' state={{data: data}}><p className='option-item'>Posts</p></Link>
            <hr className="solid" />
            <br />
              <h1 style={{color:"white"}}>Gallery</h1>
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

export default Gallery