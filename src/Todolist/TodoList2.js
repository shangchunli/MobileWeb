import React,{ Component } from 'react';
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class TodoList2 extends Component {  
    constructor(props) {    
        super(props)    
        this.state = {      
            list: [],
            finshed:0
        }
        
    }  
    addData=(data)=>{
        let title = data;
        let tempList = this.state.list;
        tempList.push({        
            title: title,        
            checked: false      
        })      
        this.setState({        
            list: tempList      
        })      
        localStorage.setItem('todoList', JSON.stringify(tempList))  
    }                      
        
     delData=(key)=>{
        let temList=this.state.list;
        temList.splice(key, 1);
        this.setState({
            list:temList
        })
        localStorage.setItem('todoList', JSON.stringify(temList));
     }
    checkData = (key) => {
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list: tempList
        })
        localStorage.setItem('todoList', JSON.stringify(tempList)) 
    }
   
         
    componentDidMount () {    
        
        var todoList = JSON.parse(localStorage.getItem('todoList'))
        
        if (todoList) {      
            this.setState({        
                list: todoList 
            })    
       }  
    }
    render () {    
        return (  
            <div>
                <Todoinput add={this.addData}/>
                <Todoing del={this.delData} cek={this.checkData} list={this.state.list}/>
            </div>    
           
           
        )  
    }
                                                            
}
    
