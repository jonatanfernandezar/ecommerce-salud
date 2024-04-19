import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My ACcount</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input type='text' placeholder="Ingrese cualquier usuario, no importa si no esta registrado" required />
            <span>Password * </span>
            <input type='password' placeholder="Ingrese cualquier contraseña, no importa si no esta registrado" required />
            <button className='button'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}
