import apisauce from 'apisauce';

const appBaseUrl = 'http://127.0.0.1:8000';

const create = (baseURL = appBaseUrl) => {

    const api = apisauce.create({
        baseURL,
        timeout: 5000
    })

    const getAllHolidays = (month) => api.get(`/holidays/months/${month}`)

    return {
        getAllHolidays,
    }
}

export default {
    create
}