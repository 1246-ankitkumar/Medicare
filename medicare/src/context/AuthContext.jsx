import React, { createContext, useContext, useState } from 'react';
import { findUser, addUser, emailExists } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  function login(email, password) {
    setError('');
    const found = findUser(email, password);
    if (found) { setUser(found); return true; }
    setError('Invalid email or password.');
    return false;
  }

  function signup(name, email, password) {
    setError('');
    if (emailExists(email)) { setError('Email already registered.'); return false; }
    const newUser = { name, email, password };
    addUser(newUser);
    const created = findUser(email, password);
    setUser(created);
    return true;
  }

  function logout() { setUser(null); }

  return (
    <AuthContext.Provider value={{ user, error, login, signup, logout, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
