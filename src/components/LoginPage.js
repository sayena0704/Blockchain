// LoginPage.js
import React from 'react';
import './LoginPage.css'; 

function LoginPage({ isConnected, onLogin }) {
  const handleConnectMetaMask = () => {
    if (window.ethereum) { // MetaMask is installed
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(() => {
          // User approved connection, set isConnected to true
          onLogin();
        })
        .catch((error) => {
          console.error(error);
          // Handle error if user denies connection
        });
    } else {
      alert('MetaMask is not installed. Please install MetaMask to continue.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p className='welcome'>Welcome to our application!</p>
      {isConnected ? (
        <button className="login-button" disabled>
          Connected to MetaMask
        </button>
      ) : (
        <button onClick={handleConnectMetaMask} className="login-button">
          Connect to MetaMask
        </button>
      )}
    </div>
  );
}

export default LoginPage;
