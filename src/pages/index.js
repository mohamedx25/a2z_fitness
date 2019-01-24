import React from "react"
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'

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
                        <h4></h4>
                    </div>
                </div>
            </div>
            <div className='group-training'>
                <h1>Group fitness</h1>
            </div>
            <div className='sports-training'>
                <h1>Sports Training</h1>
            </div>
            <div className='personal-training'>
                <h1>Personal Training</h1>
            </div>
        </div>
    </Layout>
)