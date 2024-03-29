import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from 'antd'

export default class Sider extends Component {
    render() {
        let style={float:'left'}
        return (
            <ul style={style}>
                <Button type="primary" block>按扭</Button>
                <li>
                    <NavLink activeStyle={{background:'red'
                    ,color:'#fff'}} to={
                        {pathname:'/hoc',
                        state:{id:100},
                        search:'?user=zhangsan'}
                    }>Hoc</NavLink></li>
                <li><NavLink 
                activeStyle={{background:'red'
                ,color:'#fff'}}
                to='/parent'>Parent</NavLink></li>
                
                {
                    [0,1,2,3,4].map((item)=>(
                        <li key={item}>
                            <NavLink activeStyle={{background:'red',
                        color:'#fff'}} to={'/content/'+item}>帖子</NavLink>
                        </li>
                    ))
                }

            </ul>
        )
    }
}
