import React, { useEffect, useState, useHistory } from 'react';
import './Login.css';
import axios from 'axios';
import Dashboard from './Dashboard';
import {Link, Navigate, redirect} from 'react-router-dom'; 

function Login() {


    useEffect (() =>{
        
    },[]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);

        // async function fetchData (){
        //     const response = await axios.get("https://dummyjson.com/auth/login");
        //     // setRes(response);
        // }

        async function fetchData  (){
            axios.post("https://dummyjson.com/auth/login",
            {
                username: username,
                password: password
            }
          ).then(response => {
                // <Link to='/dashboard'>
                //     <Dashboard />
                // </Link>
                // redirection();
                // history.push("/dashboard");
                console.log(response.data);
                setTokenDB(response.data.token);
                localStorage.setItem("token", response.data.token)
                console.log(typeof(response.data.token));
            })
            .catch(() => {
                localStorage.setItem("token", "")
                alert('Error :(');
            });
        }
        fetchData();
       

    }

    function redirection (){
        return (
            <Navigate to='/dashboard'/>
        );
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;