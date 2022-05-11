import Axios from 'axios'

const login = async(username, password) => {
    const { data } = await Axios.post('/api/auth/signin', {
        username,
        password
    })
    if (data.token) {
        localStorage.setItem('user', JSON.stringify(data))
        console.log('success')
    }
    if (!data.token) {
        console.log('error')
    }
    return data

    // var axios = require('axios')

    // var config = {
    //     method: 'post',
    //     url: '/api/auth/signin',
    //     data: { username, password }
    // }
    // axios(config)
    //     .then(function(response) {
    //         localStorage.setItem('user', JSON.stringify(response.data))
    //         console.log(JSON.stringify(response.data))
    //     })
    //     .catch(function(error) {
    //         console.log(error)
    //     })
}

const register = async(username, email, password, role) => {
    const { data } = await Axios.post('/api/auth/signup', {
        username,
        email,
        password,
        role
    })
    return data
}

const isAuth = () => {
    const user = localStorage.getItem('user')
    if (!user) return {}
    return JSON.parse(user)
}

export { login, register, isAuth }