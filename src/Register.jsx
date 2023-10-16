import React, { useState } from 'react'
import Styles from './Component/Styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const [ data, setData ] = useState({

        username: '',
        email: '',
        pass: '',
        mobile: '',
        gender: ''
    })

    const handlChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [ name ]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/Login_Hospital', data)
        
        navigate('/');

    }
    return (
        <div className='Login Login_Img'>
            <form onSubmit={ handleSubmit }>
                <input type="text" name='username' placeholder='Username' value={ data.username } onChange={ handlChange } />
                <br />
                <input type="email" name='email' placeholder='email' value={ data.email } onChange={ handlChange } />
                <br />
                <input type="password" name='pass' placeholder='pass' value={ data.pass } onChange={ handlChange } />
                <br />
                <input type="number" name='mobile' placeholder='mobile' value={ data.mobile } onChange={ handlChange } />
                <br />
                <select name='gender' value={ data.gender } onChange={ handlChange }>
                    <option value='' disabled>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register
