import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <div>
                footer
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
