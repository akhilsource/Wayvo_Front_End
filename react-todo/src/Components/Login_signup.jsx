import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login_signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const correctUsername = 'akhil';
  const correctPassword = '9033';

  const handle_submit = (e) => {
    e.preventDefault();
    setError('');

    if (username === correctUsername && password === correctPassword) {
      navigate('/List');
    } else {
      setError('Invalid username or password');
    }
  };

  const handle_signup = () => {
    navigate('/signup');
  };

  return (
    <div className="login_signup-body">
      <div className="login_signup-container">
        <div className="login_signup-box">
          <h2>Login</h2>
          <form onSubmit={handle_submit}>
            <div className="login_signup-input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="login_signup-input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="login_signup-login-button">Login</button>
          </form>
          <div className="login_signup-or-divider">OR</div>
          <button onClick={handle_signup} className="login_signup-signup-button">Signup</button>
        </div>
      </div>
    </div>
  );
};
export default Login_signup;
