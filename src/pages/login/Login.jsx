import React from 'react'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'
import LoginForm from '../../components/loginForm/LoginForm'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'

const Login = () => {
  return (
    <div className='login-page'>
        <ScrollToTop/>
        <SingleRouteHeader name={"Login"} arr={<></>} sname={<></>}/>
        <LoginForm/>
    </div>
  )
}

export default Login