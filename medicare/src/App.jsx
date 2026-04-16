import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import LabRecords from './pages/LabRecords';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Plans from './pages/Plans';
import Form from './pages/Form';
import './index.css';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/pricing"     element={<Pricing />} />
            <Route path="/lab-records" element={<LabRecords />} />
            <Route path="/dashboard"   element={<Dashboard />} />
            <Route path="/login"       element={<Login />} />
            <Route path="/signup"      element={<Signup />} />
            <Route path="/plans"       element={<Plans />} />
            <Route path="/form"         element={<Form />} /> 
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
