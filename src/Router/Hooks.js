import React from 'react';

import {useHistory,useLocation,useParams} from 'react-router-dom';

export default function Hooks(){
    let history=useHistory();
    let {id}=useParams();//直接解构
    console.log(id);
    console.log(useLocation);
    // console.log(useRouteMatch);
    function toHoc(){
        history.push('/Hoc');
    }
    return <div>
        <button onClick={toHoc}>跳转到HOC</button>
    </div>
}