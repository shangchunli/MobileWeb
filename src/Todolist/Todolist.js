import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css'
 

//父子组件之间传
//组件传参，事件绑定，组件交互
export default class Todolist extends Component {
    constructor(){
        super();
        this.db = localStorage;
        let todo = this.db.getItem('todo') || [];
        this.state={
            todo:eval('[' + todo + ']'),
            // todo:[]
        }
        // var obj={a:100,b:[1,2,3]};
        //方式一：
        // var o=obj;
        // o.a=200;
        // o.b[0]=200;[200,2,3]
        // console.log(obj);//a为200

        //方式二：
        // var o={...obj};
        // o.a=200;
        // o.b[0]=200;//[200,2,3]浅拷贝
        // console.log(obj);//a为100

        //方式三：
        // var o=JSON.parse(JSON.stringify(obj));
        // o.b[0]=200;
        // console.log(obj);//[1,2,3]深拷贝


        //方式四：
        // var obj1={c:300};
        // var o=Object.assign(obj,obj1);
        // console.log(obj);
        // console.log(o===obj);//true

        //方式五：
        //obj和o是不一样的，但还是浅拷贝，例如b中的值会变化
        // var obj1={c:300};
        // var o=Object.assign({},obj,obj1);
        // o.b[0]=200;
        // console.log(obj);
        // console.log(o===obj);//false
        // console.log(Object.keys(obj));
        //Object.keys记住
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item);
        //     console.log(obj[item]);
        // })

    }
    
    componentDidMount () {   
        var todoList = JSON.parse(localStorage.getItem('todoList'));  
        if (todoList) {      
            this.setState({        
                list: todoList      
            })    
        }  
    }

    addItem=(data)=>{
        // console.log(data);
        // this.state.todo.push(data);//不要对状态进行任何的处理
        //想要改变状态可以用setState
        // console.log(this.state.todo);
        // this.setState({
        //     todo:[...this.state.todo,data]
        // },()=>{
        //     localStorage.setItem(data,JSON.stringify())
        // })
            this.setState({
                todo:[...this.state.todo,data]
            },()=>{
                this.db.setItem('todo', JSON.stringify(this.state.todo));
            })

       
    }

    delItem=(idx,e)=>{
        //1、不能直接改变或处理state，通过setState改变
        // console.log(e);
        // console.log(idx);
        //2、setState是异步执行
        //方法一：
        // this.setState({
        //     todo:todo
        // },()=>{
        //     console.log(this.state.todo);//值改变
        // })
        // console.log(this.state.todo);//还是原来的值，因为setState异步
        
        this.setState((state,props)=>{
            let todo=[...this.state.todo];
            todo.splice(idx,1);
    
            // console.log(state.todo);//上一个值
            return {
                todo:todo
                // todo:state.todo.filter((item,index)=>idx!==index)
            }
        })
        //在setState里胡浩去state可能会出错，不是你想要的值
        //可以像上面一样
    }
    render() {
        //add是属性
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing  del={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
