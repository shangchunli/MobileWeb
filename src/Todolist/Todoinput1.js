import React, { Component } from 'react'
//可以实时获取表单元素的值（实现表单验证）写法相对麻烦
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);
        this.state={
            a:'',
            b:'',
            c:''
        }
    }
    //如果回车则添加一个结点
    handleInput=(e) =>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode===13){
            console.log(e.target)
            // console.log(e.target.value);//发生事件的元素
            this.props.add(e.target.value);
        }
    }
    // handleChange=(e)=>{
    //     this.setState({
    //         [e.target.name]:parseInt(e.target.value===''?0:e.target.value)//对应属性及值
    //     })
    // }
    //Render执行结束后，自动调用componentDidMount函数（生命周期）
    // componentDidMount(){
    //     console.log(this);
    //     this.a.focus();
    //     // this.refs.a.focus();//此时input应该为ref='a'
    //     //获取DOM结点只能用ref，所以第一个input中引入ref
    // }
    render() {
        //写上value值后。框内无法在写入
        //受控组件：value值被react控制的表单元素
        return (
            <div>
                {/* <label htmlFor="inp">请输入第一个数：</label>

                <input ref={(inp)=>{this.a=inp}} id="inp" name="a" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text"></input>
                +
                <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text"></input>
                +
                <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text"></input>
                = */}
                {/**非受控组件：一次性获取或处理表单元素的值 
                
                style是一个对象*/}
                {/* <p>{this.state.a+this.state.b+this.state.c}</p> */}
                <input ref={(inp)=>{this.inp=inp}} 
                onKeyDown={this.handleInput} type='text'
                placeholder="添加TODO"></input> 
                {/* <button style={{color:'red',fontSize:'20px'}}
                 onClick={()=>{console.log(this.inp.value)}}>提交</button> */}
            </div>
        )
    }
}


//类 事件 处理函数 value
//受控组件：
//非受控组件：只要拿到引用就可以
//1、给input标签输入
