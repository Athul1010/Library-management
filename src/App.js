
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminPortal from './components/adminPortal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
       <Routes>
   
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/admin_login' element={<AdminLogin/>}/>
         <Route path='/user-login' element={<UserLogin/>} />
         <Route path='/admin/*' element={<AdminPortal/>}/>

       </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
