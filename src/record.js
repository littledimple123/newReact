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
    handleDelect() { 

    }
    handleUpdate(e) { 
        e.preventDefault()
        const record = {
            date: this.date.value,
            title: this.title.value,
            amount:Number.parseInt(this.amount.value)
            
        }
        
        console.log(record)
        RecordsAPI.update(this.props.id, record).then(
            response => { 
                this.props.handleEditRecord(response.data)
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
                <td> <input type='text' className='form-control' defaultValue={this.props.date} ref={(input)=>this.date=input}/> </td>
                <td> <input type='text' className='form-control' defaultValue={this.props.title} ref={(input)=>this.title=input}/> </td>
                <td> <input type='text' className='form-control' defaultValue={this.props.amount} ref={(input)=>this.amount=input}/> </td>
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