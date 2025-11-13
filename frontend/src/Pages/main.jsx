import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // Adjust path if needed, e.g., '../App.jsx'
import { BrowserRouter } from 'react-router-dom';

// 1. Create the Context
export const Context = createContext({
  isAuthenticated: false,
});

// 2. Create the Wrapper Component that will provide the context
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({}); // Can store user data later if needed

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

// 3. Render the AppWrapper
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);