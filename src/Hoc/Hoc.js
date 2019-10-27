import React, { Component } from 'react'
import { isTemplateElement } from '@babel/types';
let url='https://api.apiopen.top/musicRankingsDetails?type=1'


//得到displayName的函数
function getDisplayName(Com){
    return Com.displayName || Com.name  || 'Component';
}

function hoc(Com,url,title){
    //返回fetch 大组件  fetch得到数据后给Mymusic
    //把生命周期放在一个组件里，共用，不可以放在一个函数里
    class Fetch extends Component{
        constructor(){
            super();
            this.state = {
                data: []
            }
        }
        //只运行一次，且在render执行完成后运行
        componentDidMount() {
            //默认是get请求，可配置第二个参数，配置请求的信息
            fetch(url,{method:'post'})
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.result
                })
            })
        }
        //Com不用在去写construction声明周期
        //{...this.props}将fetch所有属性写入Com组件
        //Com中this.props和h1中this.props对应
        render(){
            return (
                <div>
                    <p>{title}</p>
                    {/**传递父组件的属性给子组件 */}
                    <Com {...this.props} data={this.state.data}/>
                </div>
            )
        }
    }
    Fetch.displayName=`Fetch(${getDisplayName(Com)})`;
    return Fetch;
}

class Music extends Component{
    render(){
        return (
            <ul>
                <h1>{this.props.a}</h1>
                {
                    this.props.data.map(
                        (item,idx)=><li key={idx}>
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                        </li>
                    )
                }
            </ul>
        )
    }
}

class Music2 extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map(
                        (item,idx)=><p key={idx}>{item.title}</p>
                    )
                }
            </ul>
        )
    }
}

let Mymusic=hoc(Music,url,'音乐');
let Mymusic2=hoc(Music2,url,'新闻');
export default class Hoc extends Component {
    render() {
        console.log(this);
        //高阶组件加了属性a,b  fetch和Mymusic是等同的fetch可以拿到a,b
        return (
            
            <div>
                <Mymusic a='aa' b='bb'/>
                <Mymusic2/>
            </div>
        )
    }
}
