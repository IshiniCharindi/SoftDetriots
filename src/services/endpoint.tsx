import axios from "axios";
import {BEAR_TOKEN} from '../../env.tsx'


// const localDomain = axios.create({
//     baseURL: 'http://localhost:3500'
// })

const liveDomain = axios.create({
    baseURL: 'https://backend.softdetroits.com/'
})

const header = {
    headers: {'Content-Type': 'application/json', 'authorization': `${BEAR_TOKEN}`},
    withCredentials: true
}

const domain = liveDomain

domain.interceptors.response.use(
    response => {
        return response
    },

    error => {
        if(error.response) {
            if(error.response.status === 401) {
                console.warn('Unauthorized accessed - Redirecting back to homepage.')
                return error.response
            }
        }

        return Promise.reject(error)
    }
)



export {
    domain,
    header
}