import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                Home
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
