import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState("Baðlanýyor...");

  const runProject = (name) => {
    fetch('/api/execute', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ script_name: name })
    }).then(res => alert(name + " tetiklendi!"));
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#00ff00', minHeight: '100vh', padding: '50px', fontFamily: 'monospace' }}>
      <h1>SYSTEM CONTROL PANEL - QUANTUM AI</h1>
      <hr border="1px solid #222" />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
        {/* Örnek Proje Kartlarý */}
        <div style={cardStyle}>
          <h3>YouTube Bot v1</h3>
          <button onClick={() => runProject('youtube_bot.py')} style={btnStyle}>ÇALIÞTIR</button>
        </div>

        <div style={cardStyle}>
          <h3>Data Scraper</h3>
          <button onClick={() => runProject('scraper.py')} style={btnStyle}>ÇALIÞTIR</button>
        </div>

        <div style={cardStyle}>
          <h3>Proxy Manager</h3>
          <button onClick={() => runProject('proxy_check.py')} style={btnStyle}>ÇALIÞTIR</button>
        </div>
      </div>

      <div style={{ marginTop: '50px', color: '#888' }}>
        <p>> Proje Arþivi: /projects_archive (4000+ Dosya Korunuyor)</p>
        <p>> Durum: Sistemi Daðýtýma Hazýr</p>
      </div>
    </div>
  );
}

const cardStyle = { border: '1px solid #00ff00', padding: '20px', textAlign: 'center', background: '#111' };
const btnStyle = { background: '#00ff00', color: '#000', border: 'none', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' };

export default App;
