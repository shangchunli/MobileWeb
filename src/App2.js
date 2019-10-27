import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom'
import Hoc from './Hoc/Hoc'
import Parent from './Context/Parent'
import Sider from './Sider'
import NoMatch from './NoMatch'
import Content from './Router/Content'
import Hooks from './Router/Hooks'

function Login(props){
    console.log(props);
    return <button>登录</button>
}

let LoginWithRouter=withRouter(Login)

export default class App extends Component {
    render() {
        return (
            <Router basename="/build">
                <div>
                    {/* <Content>
                        <h2>这是children的内容</h2>
                        <ul>
                            <li>1</li>
                        </ul>
                    </Content> */}
                    {/* <Content name='zhangsan'/> */}
                    <Login/>
                    <Sider/>
                    <div style={{float:'left',
                    border:'2px solid red',
                    marginleft:100}}>
                        <Switch>
                            {/* switch只显示匹配成功的第一个 */}
                        {/* exact是严格匹配 */}
                        {/* /:后面是变量，这种形式不能写在最上面，否则匹配所有 */}
                            <Route exact path='/hoc' component={Hoc}/>
                                {/* <Hoc/>
                            </Route> */}
                            <Route path='/parent' component={Parent}/>
                            {/* <Redirect from='/old' to='/hoc' /> */}
                            <Route path='/old' render={()=>
                                <Redirect to='/hoc' />}/>
                            <Route path='/content/:id' component={Content}/>
                            <Route path='hooks/:id' component={Hooks}/>

                            <Route>
                                <NoMatch/>
                            </Route>
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        )
    }
}
