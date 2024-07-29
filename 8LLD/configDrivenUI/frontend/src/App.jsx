// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [uiConfig, setUiConfig] = useState(null);
  const [handlers, setHandlers] = useState({});

  useEffect(() => {
    // Fetch UI configuration from backend
    axios.get('http://localhost:5000/ui-config')
      .then(response => {
        setUiConfig(response.data.components);
        setHandlers(response.data.handlers);
      })
      .catch(error => {
        console.error('Error fetching UI configuration:', error);
      });
  }, []);

  const renderComponent = (component, index) => {
    const { type, props } = component;
    switch (type) {
      case 'button':
        return <button {...props} onClick={() => eval(handlers[props.onClick])} key={index}>{props.text}</button>;
      case 'input':
        return <input {...props} onChange={() => eval(handlers[props.onChange])} key={index} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Config Driven UI App</h1>
      {uiConfig && uiConfig.map((component, index) => (
        <div key={index}>
          {renderComponent(component, index)}
        </div>
      ))}
    </div>
  );
}

export default App;
