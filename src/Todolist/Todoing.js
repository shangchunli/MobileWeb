import React, { Component } from 'react'

export default class Todoing extends Component {
    constructor(props) {    
        super(props)
          
    }
    
    render() {
        var {list}=this.props;
        let tempList = list;
        let temp=0;
        for(var i=0;i<tempList.length;i++){
            if(!tempList[i].checked){
                temp++;
            }
        }
        return (
            <div>
                <h2>正在进行<span>          {temp}</span></h2>        
                <ul>
                {            
                    list.map((value, key) => {
                        console.log(value.checked);              
                        if (!value.checked) {                
                            return (                  
                                <li key={key}>                    
                                    <input type='checkbox' checked={value.checked} onClick={()=>{this.props.cek(key)}} />
                                    {value.title}-----------
                                    <button onClick={()=>this.props.del(key)}>删除</button>
                                </li>                
                            )              
                        }            
                    })          
                }        
                </ul>        
                <h2>已经完成<span>     {list.length-temp}</span></h2>        
                <ul>         
                {            
                    list.map((value, key) => {              
                        if (value.checked) {                
                            return (                  
                            <li key={key}>                    
                                <input type='checkbox' checked={value.checked} onClick={()=>this.props.cek(key)} />
                                {value.title}-----------
                                <button onClick={()=>this.props.del(key)}>删除</button>
                            </li>                
                            )              
                        }            
                    })          
                }        
                </ul>   
            </div>
        )
    }
}
