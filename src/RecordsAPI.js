import axios from 'axios'
const api = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:4000"
export const creat = (body) => axios.post(`${api}/record`, body)
export const update = (id, body) => axios.post(`${api}/record/${id}`, body)