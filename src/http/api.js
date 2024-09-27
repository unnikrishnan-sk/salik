import axios from 'axios'
import { Token } from '../constants/token';

export const networkApi = async (url, method = 'GET', body) => {
    try {
        const headers = { Authorization: 'Bearer ' + Token }
        const request = {
            url,
            method,
            headers
        }
        if (method === 'POST') {
            headers['Content-Type'] = 'multipart/form-data'
            request.data = body
        } else {
            headers['Content-Type'] = 'application/json'
        }
        const response = await axios(request)
        return response
    } catch (error) {
        console.log(error);
    }
}
