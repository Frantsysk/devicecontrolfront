import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8000/api/status')
      .then(response => response.json())
      .then(data => setDevices(data));
  }

  return (
    <div className="container">
      <header>
        <h1>Device Monitor</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Devices</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="devices">
          <h2>Devices</h2>
          <div className="devices-container">
            {devices.map((device, index) => (
              <div className="device" key={index}>
                <h3>{device.device__serial}</h3>
                <div className="info">
                  <div className="title">User:</div>
                  <div className="value">{device.device__account}</div>
                </div>
                <div className="info">
                  <div className="title">OS:</div>
                  <div className="value">{device.device__os}</div>
                </div>
                <div className="info">
                  <div className="title">CPU Temp:</div>
                  <div className="value">{device.cpu_temp}</div>
                </div>
                <div className="info">
                  <div className="title">IP Address:</div>
                  <div className="value">{device.ip_address}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;