import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(props) {    
        super(props)
        this.addData=this.addData.bind(this);
    }
         
   
    addData=(e)=>{
        if(e.keyCode===13){
            this.props.add(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input ref='title' onKeyUp={this.addData} placeholder="添加TODO"/>        

            </div>
        )
    }
}


