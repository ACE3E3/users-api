import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllUsers() {

    const [users , setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json")
        .then((res) => {
            setUsers(res.data.users);
            setIsLoading(false);
        })
    }, []);
    console.log(users);

    

    if(isLoading){
        return(
        <div>
            <h1>Loading...</h1>
        </div>)
    }


  return (
    <div className="wave-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,154.7C240,171,300,213,360,240C420,267,480,277,540,245.3C600,213,660,139,720,117.3C780,96,840,128,900,160C960,192,1020,224,1080,208C1140,192,1200,128,1260,117.3C1320,107,1380,149,1410,170.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        <div className='card-container'>
            <div className='card-header'>
                <h1 className='font-header'>Select an account</h1>
            </div>
            <div className='card-body'>
                {users.map((user) => {
                    return(
                        <div>
                            <Link className='allLinks' to='/user' state={{data: user}}>
                                <div className='user-profile-list'>
                                    <img className='avatar' src={user.profilepicture} alt="" />
                                    <p className='user-list'>{user.name}</p>
                                </div>
                            </Link>
                            <hr className="solid"></hr>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllUsers