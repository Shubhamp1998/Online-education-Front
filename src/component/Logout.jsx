import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Logout() {
  const refUsername =useRef('');
  const refPassword =useRef('');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const username=refUsername.current.value
    const password=refPassword.current.value
   const user={
     userName:username,passWord:password
   }
    console.log(user)
    const fetchApi=async()=>{
      try {  
        localStorage.setItem('token',"null");
        alert("logged out successfully")   
        Navigate("/");      
      } catch(err) {
        console.log(err);
        alert("invalid credentials");
   }
    
    }
    fetchApi()
   } 
    return ( 
      <div class="divsd"><center><br/><br/>
          <h2>Logout </h2><br/>
<form onSubmit= {handleSubmit}  >
   <input type="submit" class="button" value="Logout"/>
</form> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</center>

       </div>
      
    );
  }
  
  export default Logout;



