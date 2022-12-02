import React, { useRef } from "react"
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login() {
  const refusername = useRef('');
  const refpassword = useRef('');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = refusername.current.value
    const password = refpassword.current.value
    const user = {
      username: username, password: password
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
        let response = await fetch(`http://localhost:8094/api/auth/signin`, requestOptions)
        let data = await response.json();
        localStorage.setItem('token', data.jwtToken);
        console.log(localStorage.getItem('token'));
        alert("logged in successfully")
        console.log(data)

        // Navigate("/");
        // localStorage.setItem("userId",data.id)
        //   if(data.roles.includes("ROLE_ADMIN")){
        //     this.history.push("/admin");
        //   }else{
        //     this.history.push("/student");
        //   }
        //   window.location.reload();

        if(data.roles.includes("ROLE_ADMIN")){
          Navigate("/board");
        }else{
          Navigate("/student")
        }

      } catch (err) {
        console.log(err);
        alert("invalid credentials");
      }
    }
    fetchApi()
  }

  return (
    <div className="divsd" data-testid="LoginTest"><center><br /><br />
      <h2>LOGIN </h2><br />
      <form onSubmit={handleSubmit}  >
        <label htmlFor="username">username: &nbsp;&nbsp; </label>
        <input type="text" id="username" name="username" ref={refusername} autoComplete="off" placeholder="your username" required />&nbsp;&nbsp;<br /><br />
        
        <label htmlFor="password">password: &nbsp;&nbsp; </label>
        <input type="password" id="password" name="password" ref={refpassword} placeholder="your password" 
        required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"/>&nbsp;&nbsp;<br /><br />
        
        <input type="submit" className="button3" value="login"/>
      </form>
      
      <label htmlFor="username">new user : &nbsp;&nbsp;</label>
      <a className="register" href="/signup"> Register Here </a>
      
      
      <br /><br /><br /><br /><br /><br />


    </center>
    </div>
  );
}
export default Login;