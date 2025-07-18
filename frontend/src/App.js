import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: 'linear-gradient(135deg, #8B4513 0%, #DAA520 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Redirecting to Wedding Invitation...</h2>
        <p>If you're not redirected automatically, <a href="/index.html" style={{ color: '#FFD700' }}>click here</a></p>
      </div>
    </div>
  );
}

export default App;