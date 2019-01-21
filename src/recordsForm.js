import React, { Component } from 'react'
import * as RecordsAPI from './RecordsAPI'
export default class RecordForm extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            date: '',
            title: '',
            amount: '',
            
        }
        
    }
    handleChange(e) { 
        let name, obj;
        name = e.target.name
        this.setState((
            obj = {},
            obj["" + name] = e.target.value,
            obj
        ))
    }
    vaild() { 
        
        return this.state.date && this.state.title && this.state.amount
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount:Number.parseInt(this.state.amount)
        }
        RecordsAPI.creat(data).then(
            response => { 
                this.props.handleNewRecord(response.data)
                this.setState({
                    date: '',
                    title: '',
                    amount:''
                })
            }
        ).catch(
            error=>console.log(error.message)
        )
     }
    render() {
        return (
            <form className='form-inline mb-3' onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group mr-1'>
                    <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Date' name='date' value={this.state.date}/>
                </div>
                <div className='form-group mr-1'>
                <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Title' name='title' value={this.state.title}/>
                </div>
                <div className='form-group mr-1'>
                    <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Amount' name='amount' value={this.state.amount}/>
                </div>
                <button type='submit' className='btn btn-primary' disabled={!this.vaild()}>Creat Record</button>
            </form>        

        )
    }
}