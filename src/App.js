import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import ListItem from './listItem'
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
    render() {
        return (
            < div >
                <h1> 代办列表 </h1> 
                <ListGroup >
                    {this.state.list.map((item,index)=>
                        <ListItem item = {item} key = {index}/>
                    )}
                    
                    <ListGroupItem color = "info" > 已完成 /总数 < /ListGroupItem >   
                </ListGroup >
            </div>
        )
    }
}

export default TodoList