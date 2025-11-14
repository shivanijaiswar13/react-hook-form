import React from 'react'
import { useForm } from 'react-hook-form';



const App = () => {
  const {register, handleSubmit,reset, formState:{errors}} = useForm();
  const handleFormSubmit = (data)=> {
    console.log(data);
    reset();
  }

  return (
    <div>
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}  style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          gap: "15px",
        }}>
        <input {...register("name",{required: true})}type="text" placeholder='Name' />{errors.name && errors.name.type === "required" ? (<p>Name is required</p>): null}
        <input {...register("Email",{required: true})}type="text" placeholder='Email' />
        {errors.email && errors.email.type === "required"? (<p>Email is required</p>): null }
        <input {...register("password", {required: true, minLength:6})}type="text" placeholder='Password' />
        {errors.password && errors.password.type === "required" ? (<p>at least 6 characters required</p>): null}
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default App