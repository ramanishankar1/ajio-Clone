import'./login.css'
import { useState } from "react"

function Login(props){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState()
       
    const emailHandler =(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
    }
    const validate=(event)=>{
       // alert('OK')
        event.preventDefault()
        if(email.includes("@") && password.length>4){
        props.login(); 
        console.log(email,password);   
        }
        else{
            alert("Invalid Username/Password")
        }
       setEmail("")
       setPassword("")


    }
    
    

return(
       <div className='loginWrapper'> 
      <div className="loginContainer">
        <form onSubmit={validate}>
        <input type="text" className="email" placeholder="Enter E-mailID" onChange={emailHandler}value={email}/>
        <input type="password" className="password" placeholder="Enter Password" onChange={passwordHandler}value={password}/><br></br>
        <input type="submit"  className="login" value={"Login"}/>
        {/* <input type="button" className="logout" value={logout}/>   */}
        </form>
    </div>
    </div>
)
    }

    
export default Login;