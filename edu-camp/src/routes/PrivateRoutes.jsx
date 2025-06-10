import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const PrivateRoutes = ({children}) => {

const {user} = useContext(AuthContext)
const navigate = useNavigate()


if(!user){
    return navigate('/signIn')
}




















    return children
};

export default PrivateRoutes;