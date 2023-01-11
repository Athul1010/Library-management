import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'

const AddUser = () => {
let[name,setName]=useState("")
let[age,setAge]=useState("")
let[email,setEmail]=useState("")
let[phoneNumber,setPhoneNumber]=useState("")

let navigate=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault();

    //data to be posted
    let userData={name,age,email,phoneNumber}

    //posting to server
    fetch("http://localhost:4000/users",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(userData)
    })
    alert('user added suceesfully')
    navigate('/admin/user-list')
}

    return ( 

        <div className="addUser">
            <h1>Add a new User</h1>
                <div className="from_group">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="name">
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                        </div>
                        <div className="age">
                            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} min="1" placeholder="enter age"/>
                        </div>
                        <div className="userEmail">
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                        </div>
                        <div className="phoneNumber">
                            <input type="tel" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="enter phone number" />
                        </div>
                        <button>Add User</button>
                    </form>
                </div>
        </div>
     );
}
 
export default AddUser;