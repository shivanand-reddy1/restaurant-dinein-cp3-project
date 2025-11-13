import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
// We will create and use Context in the next steps
import { Context } from './main.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // This will come from Context later
  const { setIsAuthenticated } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        { email, password },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      toast.success(data.message);
       setIsAuthenticated(true); // We will enable this later
      navigate('/'); // Redirect to home page on successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(error.response.data.message);
      // setIsAuthenticated(false); // We will enable this later
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h3>Login to your account</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;