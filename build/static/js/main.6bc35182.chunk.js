(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),i=a(2),o=a(3),u=a(5),s=a(4),d=a(6),h=a(7);function m(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(h.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(h.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(h.b,{to:"/api"},"API"),c.a.createElement(h.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(h.b,null,"\u6ce8\u518c"),c.a.createElement(h.b,null,"\u767b\u5f55"))))}var b=a(11),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return c.a.createElement("div",null,c.a.createElement(h.b,{to:"".concat(e,"/all")},"\u5168\u90e8"),c.a.createElement(h.b,{to:"".concat(e,"/jing")},"\u7cbe\u534e"),c.a.createElement(h.b,{to:"".concat(e,"/share")},"\u5206\u4eab"))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"API")}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),t}(n.Component),E=(n.Component,a(33),a(14)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).addData=function(e){13===e.keyCode&&a.props.add(e.target.value)},a.addData=a.addData.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{ref:"title",onKeyUp:this.addData,placeholder:"\u6dfb\u52a0TODO"}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).delD=function(e){a.props.del(e.target.value)},a.cheD=function(e){a.props.cek(e.target.value)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list;return console.log(t),c.a.createElement("div",null,c.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),c.a.createElement("ul",null,t.map((function(t,a){if(console.log(t.checked),!t.checked)return c.a.createElement("li",{key:a},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.cheD}),t.title,"-----------",c.a.createElement("button",{onClick:e.delD},"\u5220\u9664"))}))),c.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),c.a.createElement("ul",null,t.map((function(t,a){if(t.checked)return c.a.createElement("li",{key:a},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.cheD}),t.title,"-----------",c.a.createElement("button",{onClick:e.delD},"\u5220\u9664"))}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).addData=function(e){var t=e,n=a.state.list;n.push({title:t,checked:!1}),a.setState({list:n}),localStorage.setItem("todoList",JSON.stringify(n))},a.delData=function(e){var t=a.state.list;t.splice(e,1),console.log(t[e]),a.setState({list:t}),localStorage.setItem("todoList",JSON.stringify(t))},a.checkData=function(e){var t=a.state.list;t[e].checked=!t[e].checked,a.setState({list:t}),localStorage.setItem("todoList",JSON.stringify(t))},a.state={list:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoList"));e&&this.setState({list:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{add:this.addData}),c.a.createElement(k,{del:this.delData,cek:this.checkData,list:this.state.list}))}}]),t}(n.Component);l.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6bc35182.chunk.js.map