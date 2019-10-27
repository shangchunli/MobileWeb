
//无状态组件
import React, { Component } from 'react'
import {useHistory} from 'react-router-dom';

export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
        // this.history=useHistory();
        // console.log(this.history);
    }
    componentDidMount(){
        let page=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render() {
        return (
            <div>{
                this.state.data.map((item)=>(
                    <div style={{border:'2px solid green',
                    width:500,height:500,overflow:'hidden'}} key={item.id}>
                        <h2>{item.title}</h2>
                        <div 
                        dangerouslySetInnerHTML={{__html:item.content}}></div>
                    </div>
                ))
            }
            </div>
        )
    }
}

// export default function Content(props){
//     console.log(props);
//     function toHoc(){
//         props.history.push('/hoc')
//     }
//     return (
//         <div>
//             <button onClick={toHoc}>跳转到HOC组件</button>
//             {/* {props.children}
//             Content */}
//             {/* Content{props.match.params.id} */}
//         </div>
//     )
// }