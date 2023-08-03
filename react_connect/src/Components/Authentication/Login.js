import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()

    async function loginUser(data){
        const result = await axios.post("http://127.0.0.1:8000/access/",data)
        console.log(result.data.access)
        localStorage.setItem("item", JSON.stringify(result.data.access))
        navigate("/project")
    }

  return (
    <>
    <div className='container'>
        <center><h1>User Login Form</h1></center>
        <form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor='username'>UserName</label>
            <input id='username' type='text' className='form-control' {...register("username")}/>
            <br/><br/>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' className='form-control' {...register("password")}/>
            <br/><br/>
            <input type='submit' value="Login" className='btn btn-success col-6'/>
            <NavLink to="/register"><button className='btn btn-warning col-6'>SignUp</button></NavLink>
    </form>
    </div>
    </>
  )
}

export default Login