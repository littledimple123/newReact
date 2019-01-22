import React, { Component } from 'react'
import Record from './record'
import axios from 'axios'
import RecordForm from './recordsForm'
import AmountBox from './AmountBox'
class App extends Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/record').then(
            response => this.setState({
                records: response.data,
                isLoaded: true
            })
        ).catch(
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }
    addRecord(record) { 
       // console.log(record)
        this.setState({
            error: null,
            isLoaded: true,
            records: [
                ...this.state.records,
                record
            ]
        })
    }
    updateRecord(record, data) { 
        //获得更新的索引值
        const recordIndex = this.state.records.indexOf(record)
        const newRecords = this.state.records.map((item, index) => { 
            if (index !== recordIndex) { 
                return item
            }
            return {
                ...item,
                ...data
            }
        })
        this.setState({
            records:newRecords
        })
    }
    deleteRecord(record) { 
        const recordIndex = this.state.records.indexOf(record)
        const newRecords = this.state.records.filter((item, index) => index !== recordIndex)
        this.setState({
            records:newRecords
        })
    }
    render() {
        const { error, isLoaded, records } = this.state;
        let recordsComponent;
        if (error) {
            recordsComponent = <div> Error: { error.message } </div>
        } else if (!isLoaded) {
            recordsComponent = <div> Loading... </div>       
        } else {
            recordsComponent = (
                <div>
                    <table className = 'table table-bordered'>
                        <thead>
                        <tr>
                            <td> Date </td>
                            <td> Title </td>
                            <td> Amount </td>
                            <td>Operation</td>
                        </tr> 
                        </thead> 
                        <tbody>
                            {records.map((record) => < Record key={record.id} record={record} handleEditRecord={this.updateRecord.bind(this)} handleDeleteRecord={this.deleteRecord.bind(this)}/>)}
                        </tbody>
                    </table >
                </div>
            )
        }
        
        return (
            <div>
                <h2> Records </h2>
                <div className='row mb-3'>
                    <AmountBox text='Credit' type='success'/>                    
                    <AmountBox text='Debit' type='danger'/>
                    <AmountBox text='Balance' type='info'/>
                </div>
                <RecordForm handleNewRecord={this.addRecord.bind(this)}/><br/>
                {recordsComponent} 
            </div >
        )
    }

}

export default App