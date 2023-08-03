import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function ProjectInfo() {

  const {register, handleSubmit} = useForm();
  const navigate = useNavigate()

  const access_token = JSON.parse(localStorage.getItem("item"));

  async function saveData(data){
    if (access_token){
      await axios.post("",data,{
        headers:{Authorization: "Bearer"+" "+access_token}
      })
      navigate("/project_data")
    }else{
      navigate("/login")
    }
    
  }

  return (
    <>
    <div className='container'>
    <center><h1 style={{color:"rebeccapurple"}}><b>Project Details Form</b></h1></center>
    <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='project_name'>Project Name</label>
            <input id='project_name' type='text' className='form-control' {...register("project_name")}/>
            <br/><br/>
            <label htmlFor='project_description'>Project Description</label>
            <input id='project_description' type='text' className='form-control' {...register("project_description")}/>
            <br/><br/>
            <label htmlFor='project_lead'>Project Lead</label>
            <input id='project_lead' type='email' className='form-control' {...register("project_lead")}/>
            <br/><br/>
            <label htmlFor='programming_language'>Programming Language</label>
            <br/><br/>
            <select id='programming_language'>
                <option value="c++" {...register("programming_language")}>C++</option>
                <option value="python" {...register("programming_language")}>Python</option>
                <option value="JAVA" {...register("programming_language")}>JAVA</option>
                <option value="PHP" {...register("programming_language")}>PHP</option>
                <option value="REACTJS" {...register("programming_language")}>REACTJS</option>               
            </select>
            <label htmlFor='project_start_date'>Project Start Date</label>
            <input id='project_start_date' type='date' className='form-control' {...register("project_start_date")}/>
            <br/><br/>
            <label htmlFor='project_delivery_date'>Contact </label>
            <input id='project_delivery_date' type='date' className='form-control' {...register("project_delivery_date")}/>
            <br/><br/>
            <input type='submit' value="Save" className='btn btn-success col-6'/>
            <input type='reset' value="Clear" className='btn btn-warning col-6'/>
    </form>
    </div>
    </>
  )
}

export default ProjectInfo