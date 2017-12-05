/**
 * Created by wangbo on 17/12/4.
 */
import React from 'react'
import './base.less'
import './hello.less'
class Hello extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="hello">Helllo World</div>
    }
}

export default Hello;