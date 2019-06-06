import axios from 'axios';

export const register = newUser => {
    return axios
    .post('http://localhost:3300/api/auth/register', {
        first: newUser.first,
        last: newUser.last,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Registration Complete");
    })
}

export const login = user => {
    return axios
    .post('http://localhost:3300/api/auth/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('message', 'token', res.data)
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}