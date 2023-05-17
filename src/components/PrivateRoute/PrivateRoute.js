import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = (props) => {
    const { element } = props;
    const navigate = useNavigate();
    const isLogged = !!localStorage.getItem('nickname');

    useEffect(() => {        
        if (!isLogged) navigate('/');
    }, [isLogged, navigate]);
       
    return element;
};