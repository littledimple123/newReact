import React, { Component } from 'react'
import Record from './record'
import axios from 'axios'
import RecordForm from './recordsForm'
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
                        </tr> 
                        </thead> 
                        <tbody>
                            {records.map((record) => < Record key = { record.id } {...record }/>)}
                        </tbody>
                    </table >
                </div>
            )
        }
        
        return (
            <div>
                <h2> Records </h2>
                <RecordForm /><br/>
                {recordsComponent} 
            </div >
        )
    }

}

export default App