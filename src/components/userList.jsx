import { useEffect, useState } from "react";
import '../styles/userList.css'

const UserList = () => {
    let[user,setuser]=useState([])
    useEffect(()=>{
        let fetchData1=async()=>{
            let respose1=await fetch("http://localhost:4000/users")
            let data1=await respose1.json()       
            setuser(data1)
        }
        fetchData1()
    },[])
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="user_section">
                {user.map((x)=>(
                    <div className="user">
                        <h4>Name:{x.name}</h4>
                        <h4>Age:{x.age}</h4>
                        <h4>Email:{x.email}</h4>                                       
                        <h4>Phone Number:{x.phoneNumer}</h4>
                        <h4>ID:{x.id}</h4>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;