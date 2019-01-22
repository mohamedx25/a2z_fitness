import React from 'react'
import './layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab); 


const Footer = (children) => (
    <footer id="footer" className='footer'>
        <section>
            <ul className='icons'>
                {/* need to add a function for hover and link for when they select the icon it changes color and 
                links to his instagram account (hover function and onclick function) */}
                <a href='www.google.com'><FontAwesomeIcon icon={['fab', 'instagram']} size='3x' /></a>
                <p className='copyright'>&copy; 2019 A2Z Fitness</p>
            </ul>
        </section>
    </footer>
)

export default Footer;