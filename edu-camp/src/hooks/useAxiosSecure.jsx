import axios from 'axios';
import React from 'react';


 const axiosInstance = axios.create({
    baseURL : 'http://localhost:3000'

 })

const UseAxiosSecure = () => {


    




    axiosInstance.interceptors.request.use(config=>{

         config.withCredentials = true ;
        
        return config ;
    })

    return axiosInstance ;
};

export default UseAxiosSecure;
















