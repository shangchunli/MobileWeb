import React, { Component } from 'react'
// import PropTypes from 'prop-types';
export default class Todoing extends Component {

  constructor(){
    super();
    this.handleInput=this.handleInput.bind(this);

  }
    handleInput=(e) =>{
      this.props.add(e.target.value);
      
  }

  addList=(e)=>{
    // this.props.add(e.target.value);
    // this.props.del(idx,e)
    console.log(e.target.nextElementSibling);
    this.props.add(e.target.nextElementSibling.value);
    //     console.log(this.a)//此时input应该为ref='a'

  }
    // delItem(idx,e){
    //     //深拷贝\浅拷贝
    //     var obj={a:100};
    //     var o=obj;
    //     o.a=200;
    //     console.log(obj);
    // }
   
    render() {
        var {todo}=this.props;//解构赋值
        return (
          <div>
              <h3>正在进行</h3>
            <ul>
              {
                todo.map((item,idx)=>{
                    return (
                      <div>
                        <input type="checkbox" onChange={()=>{console.log("111")}}/>
                    <li key={idx} value={item}>{item}---
                    <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                    </li>

                    </div>)
                })  //其中this.props.del不能直接加小括号，因为这表示调用
              }              
            </ul>
            <h3>已经完成</h3>

            <ul ref={(inp)=>{this.a=inp}} id="inp" name="a">
              {
                todo.map((item,idx)=>{
                    return (
                      <div>
                        <input type="checkbox" checked="checked" 
                        onChange={this.addList}/>
                    <li key={idx}>{item}---
                    <button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                    </li>

                    </div>)
                })  //其中this.props.del不能直接加小括号，因为这表示调用
              }              
            </ul>
            </div>
        )
    }
}

//类型检查
// Todoing.propTypes={
//   todo:PropTypes.array,//因为todo为数组，所以写string会报错
//   del:PropTypes.func
// }

// Todoing.defaultProps={
//   todo:[1,2,3,4,4]
// }

