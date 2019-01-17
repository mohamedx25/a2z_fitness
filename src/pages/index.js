import React from "react"
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCoffee); 

export default() => (
    <Layout>
        <div className='container'>
            <h1>Hello</h1>
            <p>my name is amine zaouia</p>
            <FontAwesomeIcon icon='coffee' />
            <FontAwesomeIcon icon={['fab', 'google']} />
        </div>
    </Layout>
)