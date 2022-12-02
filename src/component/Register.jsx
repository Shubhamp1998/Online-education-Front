import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"

function Register() {
  const refusername = useRef('');
  const refpassword = useRef('');
  const refemail = useRef('');
  const Navigate = useNavigate();

  const [roles,setRoles]=useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = refusername.current.value
    const password = refpassword.current.value
    const email = refemail.current.value
    const user = {
      username: username, password: password, email:email, roles:[roles]
    }

    

    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    };


    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8094/api/auth/signup`, requestOptions)

        let data = response.json();

        console.log(data)
        alert('Registered Successfully')
        Navigate("/")
      

      } catch (err) {
        console.log(err)
        alert('error')
      }

    }
    fetchApi()

  }

 

  return (

    <div className="register" data-testid="RegisterTest"><center><br /><br />
      <h2>REGISTER HERE</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="username">username: &nbsp;&nbsp; </label>
        <input type="text" id="username" name="username" ref={refusername} autoComplete="off" placeholder="your username" required/>&nbsp;&nbsp;<br /><br />
        
        <label htmlFor="email">Email: &nbsp;&nbsp; </label>
        <input type="text" id="email" name="email" ref={refemail} autoComplete="off" placeholder="your email" 
        //  required pattern="([a-z0-9]+@[a-z]+\\.[a-z])"
        />&nbsp;&nbsp;<br /><br />
      
      <div className="roles">
      <label htmlFor="roles">Roles: &nbsp;&nbsp; </label>
        <select onChange={(e)=>{setRoles(e.target.value)}} >            
            <option >Select Role</option>
            <option value="admin">admin</option>
            <option value="student">student</option>
          </select>
      </div>
      <br/>
        

        <label htmlFor="password">password: &nbsp;&nbsp; </label>
        <input type="password" id="password" name="password" ref={refpassword} placeholder="your password"
        required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"/>&nbsp;&nbsp;<br /><br />
        
        <input type="submit" className="button" value="submit" />
      </form> <br /><br /><br /><br /><br /><br /><br /><br />
    </center>
    </div>

  );
}

export default Register;




