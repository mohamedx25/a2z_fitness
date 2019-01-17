import React from 'react'
import './layout.css'



const Footer = (props) => (
    <footer id="footer" className='footer'>
        <section>
            <ul className='icons'>
                <li style= {{color: 'white'}}><a href='#' className='fa fa-instagram'>Instagram</a></li>
                <li><a href='#' className='fa fa-Twitter'>Twitter</a></li>
                
            </ul>
        </section>
        <p className='copyright'>&copy; 2019 A2Z Fitness</p>
    </footer>
)

export default Footer;