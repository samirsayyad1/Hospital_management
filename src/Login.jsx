import React, { useState } from 'react'
// import Styles from './Component/Styles.css'
import Styles from './Component/Styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [ data, setData ] = useState({
        username: '',
        pass: ''
    });

    const handlChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [ name ]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get('http://localhost:3000/Login_Hospital')
            .then(Response => {

                const user = Response.data;

                const users = user.find(user => user.username === data.username && user.pass === data.pass)

                if (users) {
                    alert('Login Sucessfully...');
                    navigate('/Dashbord')
                }
                else {
                    alert('Username and Password not Valid... Register Complesory');
                    navigate('/Register');
                }
            })
            .catch((err) => {
                console.log("This is a error", err);
            })
    }
    return (
        <div className='Login text-center Login_Img'>
            <form onSubmit={ handleSubmit } className='form_log'>
                <input type="text" required name='username' placeholder='Username' value={ data.username } onChange={ handlChange } />
                <br />
                <input type="password" name='pass' placeholder='Password' value={ data.pass } onChange={ handlChange } />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login
