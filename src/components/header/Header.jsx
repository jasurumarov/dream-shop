import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

// IMAGES
import MenuBtn from '../../images/menu-btn.svg'
import HomeIcon from '../../images/home-icon.svg'
import cantFind from '../../images/cantFind.png'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState("")
  const {data, error, loading} = useFetch(`products/search?q=${value}`, value)
  console.log(data);

  const searchItems = data?.data?.products?.map(el => <Link onClick={() => setValue("")} to={`/product/${el.id}`} key={el.id}>
    <img src={el.images[0]} height={50} width={50} alt="" />
    <span>{el.title}</span>
  </Link>)
  

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  return (
    <header>
        <div className="container">
          <nav className='navbar'>
            <div className="navbar__left">
              <Link className='navbar__logo' to={"/"}>
                <img src={HomeIcon} alt="home icon" />
              </Link>
              <ul className={`navbar__left-list ${toggle ? "show" : ""}`}>
                <li>
                  <NavLink className='navbar__left-listItem' to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className='navbar__left-listItem' to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink className='navbar__left-listItem' to="contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink className='navbar__left-listItem' to="register">Login</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar__right">
              <div className='navbar__right-search'>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <input className={value.trim() ? "navbar-searchInpt" : ""} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search…"/>
                {
                  value.trim() ?
                    <div className='navbar-search__content'>
                      {!data?.data?.products?.length ? 
                        <div className='notFound'>
                          <img width={100} src={cantFind} alt="" />
                          <h3>Product not found</h3>
                        </div>
                      : <></>}
                      {searchItems}
                    </div>
                  : <>  </>
                }
              </div>
              <button onClick={() => setToggle(!toggle)} className="navbar__menu-btn">
                <img src={MenuBtn} alt="menu btn" />
              </button>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header




