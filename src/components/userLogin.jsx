import '../styles/userLogin.css'
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    let navigate=useNavigate();
    let login=()=>{
         navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="form_container_card">
               <h1>Login as User</h1>
           <div className="form_input">
            <form action="" onSubmit={login} >
                
                <div className="email">
                     <label id='lab1' htmlFor="">Email</label> <br />
                     <input type="email" placeholder="Enter Email"  />
                </div>
                <div className="password">
                    <label id='lab2' htmlFor="">Password</label> <br />
                    <input type="password" placeholder="Enter Password"/>
                </div>
                <button id='btn1'>Login</button>
            </form>
           </div>
         </div>
        </div>
     );
}
 
export default UserLogin;