import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as RecordsAPI from './RecordsAPI'
export default class Record extends Component {
    constructor() { 
        super();
        this.state = {
            edit:false
        }
       
    }
    handleEdit() { 
        //debugger;
        this.setState({
            edit:!this.state.edit
        })
    }
    handleDelect(e) { 
        e.preventDefault()
        RecordsAPI.remove(this.props.record.id).then(
            response=>this.props.handleDeleteRecord(this.props.record)
        ).catch(
            error=>console.log(error.message)
        )
    }
    handleUpdate(e) { 
        e.preventDefault()
        const record = {
            date: this.date.value,
            title: this.title.value,
            amount:Number.parseInt(this.amount.value)
            
        }
        
        console.log(this.props.record.id)
        RecordsAPI.update(this.props.record.id, record).then(
            response => { 
                this.props.handleEditRecord(this.props.record,response.data)
            }
        ).catch(
            error=>console.log(error.message)
        )
    }
    recordRow() { 
        return (
            <tr>                    
                <td> {this.props.record.date} </td>
                <td> {this.props.record.title} </td>
                <td> {this.props.record.amount} </td>
                <td>
                    <button className='btn btn-info mr-1' onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button className='btn btn-danger ' onClick={this.handleDelect.bind(this)}>Delete</button>
                </td>
            </tr>
        )
    }
    recordForm() { 
        return (
            <tr>
                <td> <input type='text' className='form-control' defaultValue={this.props.record.date} ref={(input)=>this.date=input}/> </td>
                <td> <input type='text' className='form-control' defaultValue={this.props.record.title} ref={(input)=>this.title=input}/> </td>
                <td> <input type='text' className='form-control' defaultValue={this.props.record.amount} ref={(input)=>this.amount=input}/> </td>
                <td>
                    <button className='btn btn-info mr-1' onClick={this.handleUpdate.bind(this)}>Update</button>
                    <button className='btn btn-danger' onClick={this.handleEdit.bind(this)}>Cancel</button>
                </td>
            </tr>
        )
    }
    render() {
        if (this.state.edit) {
            return this.recordForm()
        } else { 
            return this.recordRow()
        }
            
        
    }
}

Record.propTypes = {
    id: PropTypes.number,
    data: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number

}