import React, { Component } from 'react'
import Record from './record'
import { getJSON } from 'jquery'
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
        getJSON('http://localhost:4000/record').then(
            response => this.setState({
                records: response,
                isLoaded: true
            }),
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }
    render() {
            const { error, isLoaded, records } = this.state;
            if (error) {
                return <div > Error: { error.responseText } < /div>
            } else if (!isLoaded) {
                return <div > Loading... < /div>       
            } else {
                return ( < div >
                    <
                    h1 > Records < /h1> <
                    table className = 'table table-bordered' >
                    <
                    thead >
                    <
                    tr >
                    <
                    td > Date < /td> <
                    td > Title < /td> <
                    td > Amount < /td>  < /
                    tr > <
                    /thead> 

                    <
                    tbody > {
                        records.map((record) => < Record key = { record.id } {...record }
                            />)} < /
                            tbody >

                            <
                            /table >

                            <
                            /div>
                        )
                    }
                }
            }

            export default App