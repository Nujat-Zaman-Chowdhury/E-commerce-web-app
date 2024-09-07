import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';
import { checkLogin } from '../api';

const Main = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const email = checkLogin();
        if(!email){
            navigate('/')
        }
    },[])
    
    return (
        <div>
            <Navbar/>
            <div  className='min-h-[calc(100vh-306px)]'>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;