import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
class ListItem extends Component {
    render() {
        const item = this.props.item
        return ( < ListGroupItem color = 'success'
            key = { item.id } > { item.name } < /ListGroupItem>)
        }
    }

    export default ListItem