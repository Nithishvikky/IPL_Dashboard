import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

export default function Login() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [gdata,setData] = useState({
        id:'',
        gmail:'',
        passowrd:'',
        type:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        fetch(`http://localhost:8082/login/${formData.email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
        localStorage.setItem('type',JSON.stringify(gdata.type));
        handle();
       }
       )
      .catch(error => console.error('Error fetching data:', error));
    };

    const handle=() =>{
        const timeoutDuration = 2000; // 2 seconds
        const timeoutId = setTimeout(() => {
            window.history.replaceState({}, '', '/Home');
        }, timeoutDuration);
    };

    return (
        <div className="container mt-3">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            
        </div>
    );
}
