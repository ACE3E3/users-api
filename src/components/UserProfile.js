import React, { useState } from 'react'
import '../styles/UserProfile.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { IoChevronUpOutline,IoChevronDownOutline } from "react-icons/io5";
import { BsChatRight } from "react-icons/bs";


function UserProfile() {
    const location = useLocation();
    const [isLoading , setisLoading ] = useState(true);
    const [logUsers, setlogUsers] = useState();
    const data = location.state?.data

    const lat = data.address.geo.lat;
    const lng = data.address.geo.lng;
    const iframeData = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`

    
    const openForm = () => {
        axios.get("https://panorbit.in/api/users.json")
        .then((res) => {
            let arr = [];
            for (let i=0;i<2;i++) {
                var random = Math.floor(Math.random() * 10);
                arr.push(res.data.users[random]);
            }
            setlogUsers(arr);
        })

        document.getElementById("myForm").style.display = "block";
    }
    
    const closeForm = () => {
        document.getElementById("myForm").style.display = "none";
    }

    const openChat = () => {
        axios.get("https://panorbit.in/api/users.json")
        .then((res) => {
            let arr = [];
            for (let i=1;i<7;i++) {
                arr.push(res.data.users[i]);
            }
            setlogUsers(arr);
        })
        document.getElementById("myChat").style.display = "block";
    }
    
    const closeChat = () => {
        document.getElementById("myChat").style.display = "none";
    }

    setTimeout(() => {
        setisLoading(false);
    }, 100);

    if(isLoading){
        return (<h1>Loading...</h1>);
    }
    
  return (
    <>
    <div className='profile' style={{width: '95%'}}>
    <div className='sidebar'>
        <div className='options'>
              <h1 style={{color:"white"}}>Profile</h1>
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/posts' state={{data: data}}><p className='option-item'>Posts</p></Link>
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/gallery' state={{data: data}}><p className='option-item'>Gallery</p></Link>
            <hr className="solid" />
            <br />
              <Link className='allLinks' to='/todo' state={{data: data}}><p className='option-item'>ToDo</p></Link>
            <hr className="solid" />
        </div>
    </div>

        <div className='profile-details'>
            <div className='profile-header'>
                <h1>Profile</h1>
                
                <div className='profile-button' onClick={() => openForm()}>
                    <img className='avatar' src={data.profilepicture} alt="" />
                    <p className='user-list' style={{cursor: "context-menu"}}>{data.name}</p>
                </div>
                <div className="form-popup" id="myForm">
                <form class="form-container">
                    {logUsers ?
                    logUsers.map((users) => {
                        return(
                        <Link className='allLinks' to="/user" state={{data:users}} onClick={() => window.location.reload()}>
                        <div className='profile-button'>
                            <img className='avatar' src={users.profilepicture} alt="" />
                            <p className='user-list'>{users.name}</p>
                        </div>
                        </Link>
                    )
                    })
                    :
                    <h1>Loading</h1>
                    }
                    <button type="button" style={{marginTop:"3em"}} className="btn success" onClick={() => closeForm()}>Close</button>
                    <Link to="/"><button type="button" className="btn cancel">Sign Out</button></Link>
                </form>
                </div>
            </div>
            <hr className="solid" />
            <div className='profile-body'>
                <div className='profile-info'>
                    <img className='avatar1' src={data.profilepicture} alt="" />
                    <h1>{data.name}</h1>
                    <ul>
                        <li className='profile-list-details'><h3>Username :</h3><h2>{data.username}</h2></li>
                        <li className='profile-list-details'><h3>E-Mail :</h3><h2>{data.email}</h2></li>
                        <li className='profile-list-details'><h3>Phone :</h3><h2>{data.phone}</h2></li>
                        <li className='profile-list-details'><h3>Website :</h3><h2>{data.website}</h2></li>
                    </ul>
                    <hr className="solid" />
                    <h1 style={{color : '#9A9A9A' , fontSize : '25px'}}>Company</h1>
                    <ul>
                        <li className='profile-list-details'><h3>Name :</h3><h2>{data.company.name}</h2></li>
                        <li className='profile-list-details'><h3>catchphrase :</h3><h2>{data.company.catchPhrase}</h2></li>
                        <li className='profile-list-details'><h3>bs :</h3><h2>{data.company.bs}</h2></li>
                    </ul>
                </div>
                <div className="vl"></div>
                <div className='profile-address'>
                        <h1 style={{color : '#9A9A9A' , fontSize : '25px'}}>Address :</h1>
                        <ul>
                            <li className='profile-list-details'><h3>Street :</h3><h2>{data.address.street}</h2></li>
                            <li className='profile-list-details'><h3>Suite :</h3><h2>{data.address.suite}</h2></li>
                            <li className='profile-list-details'><h3>City :</h3><h2>{data.address.city}</h2></li>
                            <li className='profile-list-details'><h3>Zipcode :</h3><h2>{data.address.zipcode}</h2></li>
                        </ul>

                        <iframe src={iframeData} height="500px" width="700px" style={{ borderRadius: '5%', border: 'none'}} title="map"></iframe>
                        <div className='profile-body' style={{ justifyContent: "right"}}>
                            <h1 style={{color : '#9A9A9A' , fontSize : '25px'}}>Lat :</h1><h2 style={{ marginRight: '2em', fontSize : '23px'}}>{data.address.geo.lat}</h2>
                            <h1 style={{color : '#9A9A9A' , fontSize : '25px'}}>Long :</h1><h2 style={{ marginRight: '2em', fontSize : '23px'}}>{data.address.geo.lng}</h2>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div class="open-button" style={{display:"flex", backgroundColor:"#3D57C8"}} onClick={() => openChat()}><BsChatRight style={{marginTop:"6px"}} size={30}/> <span style={{marginLeft:"10px",fontSize: "25px", color:"white"}}>Chat</span> <IoChevronUpOutline style={{ marginLeft: "10em",marginTop:"3px"}} size={30}/></div>

    <div class="chat-popup" id="myChat">
    <div className="open-button1" style={{display:"flex"}} onClick={() => closeChat()}><BsChatRight style={{marginTop:"6px"}} size={30}/> <span style={{marginLeft:"10px",fontSize: "25px", color:"white"}}>Chat</span> <IoChevronDownOutline style={{ marginLeft: "10em",marginTop:"3px"}} size={30}/></div>
    <form action="/action_page.php" class="chat-form">
    
        {logUsers ?
        logUsers.map((users) => {
            return(
            <div style={{display:"flex"}} >
            <div className='profile-button'>
                <img className='avatar' src={users.profilepicture} alt="" />
                <p className='user-list' style={{margin:"auto"}}>{users.name}</p>
            </div>
            </div>
        )
        })
        :
        <h1>Loading</h1>
        }
    </form>
    </div>
    
    </>
  )
}

export default UserProfile