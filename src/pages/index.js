import React from "react"
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Button } from 'react-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../components/index.css'

library.add(fab, faCoffee); 

export default() => (
    <Layout>
        <div className='container'>
            <div className='intro'>
                <div className='banner'>
                    <div className='banner-description'>
                        <h1>A2Z Fitness</h1>
                        <h4>It's time to go from A to Z in your
                            fitness journey!
                        </h4>
                    </div>
                </div>
            </div>
            <div className='sports-training'>
                <h1>Sports Specialized Training</h1>
                <p>
                    A2Z Fitness speciliazes in sports specific 
                    strength and conditioning training. We train you
                    to help you excel in your sport doesnt matter the sport.
                    We focus on specific sports related movement. 
                </p>
                <h5>Contact me to schedule an individual training session!</h5>
                {/* put a button heree. Bootstrap? */}
                <Button bsStyle='primary' bsSize='large' active>
                    Contact Me!
                </Button>                

            </div>
            <div className='group-training'>
                <h1>Group Fitness Classes</h1>
                <p>
                    I run Group HIIT and bootcamp classes at Signature Fitness! 
                    {/*add a link to signature fitness*/} 
                    
                    I run classes every Tuesday 7 pm, Thursday 7 pm and Fridays at 6 am.
                </p>
                <div>
                    {/*Put the promo video here!  */}
                </div>
            </div>
            <div className='personal-training'>
                <h1>Personal Training</h1>
            </div>
        </div>
    </Layout>
)