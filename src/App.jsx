import './scss/style.scss'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SingleRoute from './pages/singleRoute/SingleRoute'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'

// Components
import AnimCursor from './components/animCursor/AnimCursor'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Header from './components/header/Header'
import NotFound from './components/notFound/NotFound'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      {/* <AnimCursor/> */}

      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={ <SingleRoute/> }/> {/* Dynamic Route */}
        <Route path='/register' element={<Login/>}/>

        <Route path="/" element={<Auth/>}>
          <Route path="admin" element={<Admin/>}/>
        </Route>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>   

      <Footer/>
      <ToastContainer/> 
    </>
  )
}

export default App
