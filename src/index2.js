import React,{Fragment,Component} from 'react';
// import {ShowTime} from './showTime'
import ReactDOM from 'react-dom';
import './index.css';
// import Todolist from './Todolist/Todolist';
import Request from './Request/Request'
import Parent from './Context/Parent'
import {con} from './Context/Context'
import {con2} from './Context/Context'
import Hoc from './Hoc/Hoc'
import Portal from './Portal/Portal'
import ParentPortal from './Portal/ParentPortal'
import App from './App'
import Todolist from './Todolist/Todolist';

//容器组件  UI组件（展示组件）
//智能组件 /  木偶组件
//容器组件（container/pages）：逻辑，功能，可以是一个页面
//UI组件(components)：纯展示用，返回结构，返回react

ReactDOM.render(<App/>,document.getElementById("root"));

// ReactDOM.render(<Todolist/>,document.getElementById("root"));
// ReactDOM.render(<ParentPortal/>,document.getElementById("root"));

//Context:
//1、生成Context，可写在一个js文件中，export导出
//2、在根组件import Provider，并配置Provider，加上value属性
//3、在需要获取数据的组件，import Consumer并配置Consumer
//Consumer组件里是个函数，函数的参数是传过来的value值


// let id=1234;
// ReactDOM.render(<Hoc/>,document.getElementById('root'));
// ReactDOM.render(<con.Provider value={id}>
//     <div>dddd</div>
//     <con2.Provider value='aaa'><Parent/></con2.Provider>
    
//     </con.Provider>
//     ,document.getElementById('root'));


//map是循环  map((item,idx)=><li key={idx}>{item}</li>)
//属性是props，子用父中的方法是this.props.属性名

// ReactDOM.render(<Todolist/>,document.getElementById('root'));
// ReactDOM.render(<Request/>,document.getElementById('root'));



//函数声明组件
//props是一个属性对象（只读） return必须在一个闭合的标签里面
//React.Fragment解构赋值，在上面引入Fragment
// function ShowTime(props){
//     console.log(props);
//     return (<Fragment>
//             <div>{props.age}</div>
//             <div>{props.name}</div>
//             <div>{new Date().toLocaleString()}</div>
//         </Fragment>
//     )
// }


//组件的交互
//父组件---->子组件：调用子组件时，添加属性，子组件通过props拿到传递的数据
//子组件---->父组件：

// var num=[1,2,3,4,5];

// ReactDOM.render(<ShowTime age={num} name="zhangsan"/>,document.getElementById("root"));









//显示当前系统时间
//其中p不更新，div更新，不变所以不更新
// function showTime(){
//     var ele=<div>
//         <p>当前时间是：</p>
//         <div>{new Date().toLocaleString()}</div>
//     </div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector("#root")
//     );
// }
// showTime();
// setInterval(showTime,1000);//不能为showTime()



// var str='react';
// var ele=<h1>hello {str}</h1>
// var ele=<h1>hello react</h1>;
// var ele=<h1 class="tit">hello {str}</h1>;
var obj={
    type:'div',
    props:{
        id:'tit',
        class:'tit',
        children:['hello','react',
        {
            type:'h1',
            props:{
                id:'titt',
                class:'tittt',
                children:['yyyy']
            }
        }

    ]
    }
    
}

//渲染
function render(obj,container){

    //解构赋值
    var {type,props}=obj;

    //文档碎片
    var fragment=document.createDocumentFragment();
    
    var ele=document.createElement(type);
    for(var item in props){
        if(item=='class'){
            ele.className=props[item];
        }else if(item='children'){
           for(var i=0;i<props.children.length;i++){
                // ele.innerHTML+=props.children[i];
                if(typeof props.children[i]==='object'){
                    render(props.children[i],ele)
                }else{
                    var txt=document.createTextNode(props.children[i]);
                    ele.appendChild(txt);
                }
           }
        }else{
            ele[item]=props[item];
        }
    }
    fragment.appendChild(ele)
    container.appendChild(fragment);
}
// render(obj,document.getElementById('root'));
//页面渲染过程
//请求HTML页面，浏览器HTML解析器解析HTML文件、生成DOM树
//link引入css文件、css解析器解析css，生成css对象模型，CSSOM和
//DOM tree结合生成一个render tree,最后浏览器绘制页面
//页面回流（重排reflow）：DOM结构变化、内容变化、大小、位置的变化、显示的变化
//页面重绘（repaint）：颜色的变化（背景色、字体颜色、边框颜色）
//回流一定重绘，重绘不一定回流

//1、现用变量进行DOM处理，最后一次渲染（节省时间）
// console.time('time');
// var div=document.getElementById('root');
// var str='';
// for(var i=0; i<1000;i++){
//     str+='<p>'+i+'</p>';
//     document.getElementById('root').innerHTML=
//      '<p>'+i+'</p>';//浪费时间,处于回流
// }
// div.innerHTML=str;
// console.timeEnd('time');

//2、对于样式处理,声明一个css类

var div=document.getElementById('root');
// div.style.width='100px';
// div.style.height='100px';
// div.style.background='red';
div.className='active';

//3、offsetLeft、offsetWidth等都会引起回流，要慎用
// console.log(div.offsetLeft);
// var wid=div.offsetWidth;//不要再循环中用，
// setInterval(()=>{
//     wid+=1;
//     div.style.width=wid+'px';
//     // div.style.width=div.offsetWidth+1+'px';//代码效率不高
// },100)

//4、文档碎片（内存中的一个变量）












// var ele=React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement('p',{id:'t',class:'titi'},'react')
    
    
//     );
// var ele=<h1>hello<p>react</p></h1>
// console.log(ele);

// ReactDOM.render(ele, document.getElementById('root'));



