import './scss/style.scss'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import SingleRoute from './pages/singleRoute/SingleRoute'

// Components
import AnimCursor from './components/animCursor/AnimCursor'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Header from './components/header/Header'
import NotFound from './components/notFound/NotFound'

function App() {

  return (
    <>
      <AnimCursor/>
      <ScrollToTop/>

      <Header/>   
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/:id" element={ <SingleRoute/> }/> {/* Dynamic Route */}
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='register' element={<Login/>}/>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>   
    </>
  )
}

export default App
