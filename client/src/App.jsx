import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';
import VerifyBeneficiary from './components/VerifyBeneficiary';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="app-container">
      <header className="navbar">
        <div 
          className="logo-section" 
          onClick={() => setCurrentView('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-circle">DBI</div>
          <h2>GIA Portal</h2>
        </div>
        <button 
          className="login-btn"
          onClick={() => setCurrentView('login')}
        >
          Secure Login
        </button>
      </header>

      <main>
        {currentView === 'home' && <HomePage onVerifyClick={() => setCurrentView('verify')} />}
        {currentView === 'login' && <Login />}
        {currentView === 'verify' && <VerifyBeneficiary />}
      </main>
    </div>
  );
}

export default App;
