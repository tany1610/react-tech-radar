// AppContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

const defaultState = {};

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  // Function to update state
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
