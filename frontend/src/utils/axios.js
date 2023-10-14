import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVICE_URL, // setting base url
    timeout: 20000,
})

// post default header
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

let requestCount = 0

// show loading
function showLoading () {
    if (requestCount === 0) {
        var dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip="Loading..." size="large"/>, dom)
    }
    requestCount++
}

// hidden loading
function hideLoading () {
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}

// before request
Axios.interceptors.request.use(config => {
   // if requestCount=0，loading, avoid re-showing
    if (config.headers.isLoading !== false) {
        showLoading()
    }
    return config
}, err => {
    if (err.config.headers.isLoading !== false) {
        hideLoading()
    }
    return Promise.reject(err)
})

// after request
Axios.interceptors.response.use(res => {
    // hidden loading
    if (res.config.headers.isLoading !== false) {
        hideLoading()
    }
    return res
}, err => {
    if (err.config.headers.isLoading !== false) {
        hideLoading()
    }
    if (err.message === 'Network Error') {
        message.warning('Network Error!')
    }
    if (err.code === 'ECONNABORTED') {
        message.warning('Connection Timeout!')
    }
    return Promise.reject(err)
})

Component.prototype.$axios = Axios

export default Axios