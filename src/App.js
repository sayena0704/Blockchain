import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setIsConnected(true);
    setCurrentPage('upload');
  };

  const handleNavigate = (path, state) => {
    // Implement your navigation logic here
    console.log(`Navigating to ${path}`);
    // Example: Redirect to the target path using window.location or any other navigation method
    // window.location.href = path;
  };

  return (
    <div className="App">
      {currentPage === 'login' ? (
        <LoginPage isConnected={isConnected} onLogin={handleLogin} />
      ) : (
        <UploadPage onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
