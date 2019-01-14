import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import ListItem from './listItem'
import Dialog from './dialog'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{
                    id: 0,
                    name: '起床',
                    status: 0
                }, {
                    id: 1,
                    name: '吃饭',
                    status: 0
                },
                {
                    id: 2,
                    name: '上班',
                    status: 0
                }
            ],
            finished: 0
        }
    }
    updateFinished(todoItem) {
        var sum = 0;
        this.state.list.forEach((item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status
            }
            if (todoItem.status === 1) {
                sum++
            }
        })
        this.setState({
            finished: sum
        })
    }
    updatedelect(todoItem) {
        var arr = [];
        var sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                arr.push(item)
                if (item.status === 1) {
                    sum++
                }
            }

        })
        this.setState({
            list: arr,
            finished: sum
        })
    }
    addTask(newitem) {
        var allTask = this.state.list;
        allTask.push(newitem)
        this.setState({
            list: allTask
        })
    }
    render() {
        return ( <
            div >
            <
            h1 > 代办列表 < /h1> <
            Dialog nums = { this.state.list.length }
            addNewTask = { this.addTask.bind(this) }
            / >      <
            ListGroup > {
                this.state.list.map((item, index) =>
                    <
                    ListItem item = { item }
                    key = { index }
                    finishedChange = { this.updateFinished.bind(this) }
                    delectChange = { this.updatedelect.bind(this) }
                    />
                )
            }

            <
            ListGroupItem color = "info" > { this.state.finished }
            已完成 / { this.state.list.length }
            总数 < /ListGroupItem >    < /
            ListGroup >
            <
            /
            div >
        )
    }
}

export default TodoList