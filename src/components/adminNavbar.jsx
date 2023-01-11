import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="nav_logo">
                <img height="100" src="https://www.logolynx.com/images/logolynx/0c/0c7191dc35a536be1326d8c778722949.png" alt="" />
            </div>

            <div className="nav_links">
            
                <Link to="/admin/">Dash Board</Link>
                <Link to="/admin/add-book">Add Books</Link>
                <Link to="/admin/add-user">Add user</Link>  
                <Link to="/admin/book-list">Book Lists</Link>  
                <Link to="/admin/user-list">User List</Link>   
                <Link to="/">Log Out</Link> 

               
                
            </div>

        </div>
     );
}
 
export default AdminNavbar;