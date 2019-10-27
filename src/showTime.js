import React,{Fragment,Component} from 'react';

//类定义组件
class ShowTime extends Component{
    //状态
    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        console.log('constructor');
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }else{
            return false;
        }
    }
    componentDidUpdate(preProps,preState,data){
        console.log('didupdate');
        console.log(preState)
        console.log(this.state.time);
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnaphot');
        return {name:this.state.a};
    }
    componentDidMount(){
        console.log('didmount');
    }
    render(){
        // console.log('render');
        var {name,age}=this.props;//this.props.name=name
        return (<Fragment>
            {/**条件渲染   三种形式，if看情况才能用*/}
            {name.length>5?<div>姓名：{name}</div>:''}
            {name.length>5&&<div>姓名：{name}</div>}
            
            <div>{this.state.time}</div>
            {/*循环渲染 */}
            <div>
               {
                   age.map((item,index)=>{
                       if(index%2===0){
                        return <p key={index}>{item}</p>
                       }
                   })
               }
            </div>
        </Fragment>
        )
    }
}
//默认导出：只能导出一次，被引入时可以重命名
// export default ShowTime;

//命名导出：可以导出多个，被引入时、可以重命名
export {ShowTime};
export const num=100;
export const num1=200;