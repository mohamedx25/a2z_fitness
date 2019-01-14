import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'

const ListLink = props =>(
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
export default({ children }) =>(
    <div style= {{ margin: '3rem auto', maxWidth: '100%', backgroundColor: 'none' }}>
      <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`}}>
           <h1>A2Z fitness</h1>
        </Link>
        <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/store/">Store</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <Footer />
      {children}
    </div>
)

