import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
class ListItem extends Component {
    constructor(props) {
        super(props)
        this.handleFinished = this.handleFinished.bind(this)
        this.handleDelect = this.handleDelect.bind(this)
    }
    handleFinished() {
        //debugger;
        var status = this.props.item.status;
        status = (status === 0 ? 1 : 0)
        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }
        this.props.finishedChange(obj)
    }
    handleDelect() {
        console.log(this.props.item)
        this.props.delectChange(this.props.item)
    }
    render() {
        const unfinish = {
            backgroundColor: '#DFFCB5',
            color: '#2EB872',
        };

        const finish = {
            backgroundColor: '#FFFA9D',
            color: '#FF9A3C',
            textDecoration: 'line-through'
        }
        const overfinished = {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            borderColor: '#000',
            borderWidth: '1px',
            borderStyle: 'solid'
        }
        const unOverfinished = {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            borderColor: '#ddd',
            borderWidth: '1px',
            borderStyle: 'solid'
        }
        const item = this.props.item
        return ( < ListGroupItem color = 'success'
            key = { item.id }
            style = { item.status === 0 ? unfinish : finish } >
            <
            span style = { item.status === 1 ? unOverfinished : overfinished }
            onClick = { this.handleFinished } > < /span> <
            span > { item.name } < /span> <
            span onClick = { this.handleDelect } > 删除 < /span>

            <
            /ListGroupItem>)
        }
    }

    export default ListItem