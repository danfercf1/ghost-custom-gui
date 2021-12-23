import React from 'react';
import { Link } from 'react-router-dom';

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const api = process.env.API_URL || 'http://localhost:3000';
    fetch(`${api}/api/auth`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value
        }),
        method: 'POST'
    })
    .then(res => res.json())
    .then(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log(error);
        }
    )
}

const Login = () => {
    return (
        <React.Fragment>
            <div>
                <h1>Login</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input id='email' name='email' type='text'></input>
                    <label>Password:</label>
                    <input id='password' name='password' type='password'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>

            <div>
                <Link to={'/'}>Home</Link>
            </div>
            
        </React.Fragment>
    );
}
export default Login;