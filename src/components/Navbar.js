import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Navbar extends Component {
    render() {
        return (
            <div>
               navbar 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
