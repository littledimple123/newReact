import React, { Component } from 'react'
import { Button } from 'reactstrap'
class Dialog extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var len = this.props.nums
        var newid = len > 0 ? len : 0;
        var value = this.input.value;
        if (value !== '') {
            var obj = {
                id: newid,
                name: value,
                status: 0
            }
            this.input.value = '';
            this.props.addNewTask(obj)
        }


    }

    render() {
        return ( <
            div className = 'dialog' >
            <
            div > < h3 > Task < /h3> <
            input type = 'text'
            ref = { input => this.input = input }
            placeholder = '请输入任务' /
            >
            <
            /
            div >
            <
            Button color = "success"
            onClick = { this.handleClick } > 保存任务 < /Button> </
            div >
        )
    }
}

export default Dialog