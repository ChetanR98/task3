import React from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();


    async function saveData(data){
        await axios.post("http://localhost:8000/register/", data)
        navigate("/login")
    }

  return (
    <>
    <div className='container'>
        <center><h1>User Registration Form</h1></center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='first_name'>First Name</label>
            <input id='first_name' type='text' className='form-control' {...register("first_name")}/>
            <br/><br/>
            <label htmlFor='last_name'>Last Name</label>
            <input id='last_name' type='text' className='form-control' {...register("last_name")}/>
            <br/><br/>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' className='form-control' {...register("email")}/>
            <br/><br/>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' className='form-control' {...register("username")}/>
            <br/><br/>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' className='form-control' {...register("password")}/>
            <br/><br/>
            <label htmlFor='contact_no'>Contact </label>
            <input id='contact_no' type='number' className='form-control' {...register("contact_no")}/>
            <br/><br/>
            <label htmlFor='gender'>Gender</label>
            <br/><br/>
            <select id='gender'>
                <option value="male" {...register("gender")}>Male</option>
                <option value="female" {...register("gender")}>Female</option>
                <option value="other" {...register("gender")}>Other</option>
            </select>
            <br/><br/>
            <label htmlFor='address'>Address</label>
            <input id='address' type='text' className='form-control' {...register("address")}/>
            <br/><br/>
            <label htmlFor='landmark'>Landmark</label>
            <input id='landmark' type='text' className='form-control' {...register("landmark")}/>
            <br/><br/>
            <label htmlFor='city'>City</label>
            <input id='city' type='text' className='form-control' {...register("city")}/>
            <br/><br/>
            <label htmlFor='state'>State</label>
            <input id='state' type='text' className='form-control' {...register("state")}/>
            <br/><br/>
            <label htmlFor='country'>Country</label>
            <input id='country' type='text' className='form-control' {...register("country")}/>
            <br/><br/>
            <label htmlFor='pincode'>Pin</label>
            <input id='pincode' type='number' className='form-control' {...register("pincode")}/>
            <br/><br/>
            <input type='submit' value="Save" className='btn btn-success col-6'/>
            <input type='reset' value="Clear" className='btn btn-warning col-6'/>
        </form>
    </div>
    </>
  )
}

export default Register