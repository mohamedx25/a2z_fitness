import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import './layout.css'
import logo from '../components/logo.jpg'

console.log(logo);

const ListLink = props =>(
    <li style={{ display: `inline-block`, marginRight: `1rem`, textDecoration: 'none'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default({ children }) =>(
    <div style= {{ margin: '0 auto', maxWidth: '100%'}} >
      <header style={{ marginBottom: `0 auto`}} className='header'>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}} 
        className='logo'>
           <img src={logo} alt='logo' />
        </Link>
        <ul className='nav'>
            <ListLink to="/" className='link'>Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/store/">Store</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <Footer />
    </div>
)

