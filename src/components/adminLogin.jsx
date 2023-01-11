import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate();


    let login = (e) => {
        e.preventDefault();

        let data = { email, password }
        if (email == "admin@gmail.com" && password == 1234) {
            navigate('/admin/')
        } else {
            alert("Inavalid credentials")               
        }
    }

    return (
        <div className="adminlogin">
            
                <div className="form_container_card">
                    <h1>Login as Admin</h1>
                    <div className="form_input">
                        <form action="" onSubmit={login} >

                            <div className="email">
                                <label id="lab1" htmlFor="">Email</label> <br />
                                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="password">
                                <label id="lab2" htmlFor="">Password</label> <br />
                                <input type="password" placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button id="btn1" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        
    )
}
export default AdminLogin;