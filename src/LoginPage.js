import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import DjangoCSRFToken from 'django-react-csrftoken';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    try {
      const response = await fetch('http://localhost:8000/login/login/', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.status === 'success') {
        history.push('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login.');
    }
  }
  

  return (
    <form className="login-page" onSubmit={handleLogin}>
      <DjangoCSRFToken/>
      <div className="login-form">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginPage;
