import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit, watch, setError, formState: { errors,isSubmitting }, } = useForm(); 

  const delay = (d)=> {
    return new Promise((resolve, reject)=>{
      setTimeout(() =>{
        resolve()
      }, d * 1000); 
    })
  }
  const onSubmit = async data => {
   //await delay(2) //simulating network deplay
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)})
    let res = await r.text
    console.log(data, res)
    if(data.username == "lohit"){
      setError("myform", {message: "Your form is not in good order because credentials are invaild"})
    }
    elseif(data.username === "rohan")
    {
      setError("blocked", {message: "Sorry this user is blocked"})
    }

  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input {...register("username", {required: {value: true, message:"This field is required"}, minLength: {value: 3, message:"Min length is 3"}, maxLength: {value: 8, message: "Max length is 8"} })} type="text" placeholder="Username" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input {...register("password", {minLength: {value: 7, message: "Min length of password is 7"}})} type="password" placeholder="Password" />
          {errors.username && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="Submit" name="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
