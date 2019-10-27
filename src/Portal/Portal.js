import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Portal extends Component {
    handleClick=()=>{
        console.log('portalCilck');
    }
    render() {
        return (
            ReactDom.createPortal(
                <div>
                    <h1 onClick={this.handleClick}>Portal</h1>
                </div>,
                document.body
            )
        )
    }
}
