import React from 'react'
import Header from './Header'
import {PageRoutes} from './PageRoutes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <PageRoutes/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
