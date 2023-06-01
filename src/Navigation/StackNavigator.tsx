import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading';
import AuthNavigator from './AuthNavigator';
import MenuLateral from './MenuLateral';

const StackNavigation = () => {
    const { status } = useContext(AuthContext);
console.log(status)
    if (status === 'checking') {
        return <Loading />;
    }

    if (status !== 'authenticated') {
        return <AuthNavigator />;
    }

    return <MenuLateral />;
};

export default StackNavigation;