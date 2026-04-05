import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(username === 'admin' && password === 'admin') {
      setStatus('Login successful! Redirecting to secure dashboard...');
    } else {
      setStatus('Invalid credentials. Try admin / admin');
    }
  };

  return (
    <div className="form-container">
      <h2>Secure Official Portal Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <label>
          Username
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Enter Username" 
            required 
          />
        </label>
        <label>
          Password
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Enter Password" 
            required 
          />
        </label>
        <button type="submit" className="cta-btn">Login</button>
      </form>
      {status && <p className="status-msg">{status}</p>}
    </div>
  );
};

export default Login;
