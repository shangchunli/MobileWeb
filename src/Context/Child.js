import React, { Component } from 'react'
import {con} from './Context'//con为对象所以加{}
import {con2} from './Context'


export default class Child extends Component {
    render() {
        // console.log(this.context)
        return (
            <div>
                Child组件
                <div>{this.context}</div>
                {/**下面也可以得到1234，context是一定定义好的，不可变 */}
                {/* <con.Consumer>
                    {
                        (id)=><div>{id}</div>
                    }
                </con.Consumer> */}
            </div>
        )
    }
}

Child.contextType=con2;//这样this.context就有值了  