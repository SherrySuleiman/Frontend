import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Index() {
  const [registrationData, setRegistrationData] = useState({ name: '', email: '', password: '', confirm_password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isRegistered, setIsRegistered] = useState(true);

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm_password } = registrationData;

    if (password !== confirm_password) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    setRegistrationData({ name: '', email: '', password: '', confirm_password: '' });
    setIsRegistered(true);
    alert('Registration successful! Now you can log in.');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const login_email = loginData.email;
    const login_password = loginData.password;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== login_email || storedUser.password !== login_password) {
      alert('Invalid email or password. Please try again.');
      return;
    }

    alert('Login successful! Welcome, ' + storedUser.name + '!');

    // Redirect to '/Officer' after successful login
    setLoginData({ email: '', password: '' });
    window.location.href = '/Officer';
  };

  const showCredentials = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No user credentials found.');
      return;
    }

    const message =
      'Stored Credentials:\n' +
      'Name: ' + storedUser.name + '\n' +
      'Email: ' + storedUser.email + '\n' +
      'Password: ' + storedUser.password;

    alert(message);
  };

  const handleSignupClick = () => {
    setIsRegistered(false);
  };

  const handleBackToLoginClick = () => {
    setIsRegistered(true);
  };

  return (
    <div className="background">
      {isRegistered ? (
        <div className="d1">
          <center>
            <h2 style={{ color: 'blue' }}>Login</h2>
          </center>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="loginEmail">Email:</label>
            <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} required />
            <br />
            <label htmlFor="loginPassword">Password:</label>
            <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} required />
            <br /><br />
            <button type="submit">Login</button>
          </form>
          <button className="lock-icon" onClick={showCredentials}></button>
          <p>
            Not registered yet?{' '}
            <button className="signup-button" onClick={handleSignupClick}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="d1">
          <center>
            <h2 style={{ color: 'blue' }}>Registration</h2>
          </center>
          <form onSubmit={handleRegistrationSubmit}>
            <label htmlFor="regName">Name:</label>
            <input type="text" name="name" value={registrationData.name} onChange={handleRegistrationChange} required />
            <br />
            <label htmlFor="regEmail">Email:</label>
            <input type="email" name="email" value={registrationData.email} onChange={handleRegistrationChange} required />
            <br />
            <label htmlFor="regPassword">Password:</label>
            <input type="password" name="password" value={registrationData.password} onChange={handleRegistrationChange} required />
            <br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirm_password" value={registrationData.confirm_password} onChange={handleRegistrationChange} required />
            <br /><br />
            <button type="submit">Register</button>
          </form>
          <p>
            Already registered?{' '}
            <button className="back-to-login" onClick={handleBackToLoginClick}>
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Index;
