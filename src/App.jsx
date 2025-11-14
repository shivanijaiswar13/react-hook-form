import React from 'react'
import { useForm } from 'react-hook-form';



const App = () => {
  const {register, handleSubmit,reset} = useForm();
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
        <input {...register("name")}type="text" placeholder='Name' />
        <input {...register("Email")}type="text" placeholder='Email' />
        <input {...register("password")}type="text" placeholder='Password' />
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default App