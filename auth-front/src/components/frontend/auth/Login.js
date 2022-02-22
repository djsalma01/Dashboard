import React, { useState } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Login() {


    const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput,[e.target.name]: e.target.value});
    }  
    
    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {

            axios.post('api/login', data).then(res => {
                
                if(res.data.status === 200)
                {   
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);

                    swal("Success", res.data.messages, "success");
                    navigate('/');
                }
                else if(res.data.status === 401)
                {
                    swal("warning", res.data.message, "warning");

                }
                else 
                {
                    setLogin({...loginInput,error_list: res.data.validator_errors})

                }

            })
        });

    }
    
    const [stat, setStat] = useState({
        googleLoginUrl: null,

    });


    const componentDidMount = ()=> {
        fetch('/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong!');
            })
            .then((data) => setStat({ googleLoginUrl: data.url }))
            .catch((error) => console.error(error));
    }

    const { googleLoginUrl } = stat;

    return (
        <div>
            <Navbar/>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Login</h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={loginSubmit}>

                                    <div className='form-group mb-3'>
                                        <label>Email ID</label>
                                        <input type="" name='email' onChange={handleInput} value={loginInput.email} className='form-control' />
                                        <span>{loginInput.error_list.email}</span>

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Password</label>
                                        <input type="" name='password' onChange={handleInput} value={loginInput.password} className='form-control' />
                                        <span>{loginInput.error_list.password}</span>

                                    </div>
            
                                    <div className='form-group mb-3'>
                                       <button type='submit' className='btn btn-primary'> 
                                       Login            
                                       </button>   

                                             { (
                                                <a className="mr-10 btn btn-primary" href={googleLoginUrl} onClick={componentDidMount}>
                                                Sign in with Google  </a> )}
                                                
                                                          
                                    </div>
                                </form>


                            </div>

                        </div>

                    </div>

                </div>

            </div>        </div>
    )
}

export default Login;