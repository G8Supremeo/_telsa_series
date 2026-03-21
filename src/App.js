import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './features/car/carSlice';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CarDetail from './components/CarDetail';
import Configurator from './components/Configurator';
import InteriorShowcase from './components/InteriorShowcase';
import SplashScreen from './components/SplashScreen';
import Checkout from './components/Checkout';

const lightTheme = {
  headerBg: 'transparent',
  headerText: '#171a20',
  bodyBg: '#ffffff',
  cardBg: 'rgba(255,255,255,0.65)',
  textPrimary: '#171a20',
  textSecondary: '#393c41',
}

const darkTheme = {
  headerBg: 'rgba(0,0,0,0.8)',
  headerText: '#ffffff',
  bodyBg: '#0a0a0a',
  cardBg: 'rgba(0,0,0,0.65)',
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const darkMode = useSelector(selectDarkMode);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/model/:modelId" element={<><CarDetail /><Footer /></>} />
            <Route path="/configurator" element={<><Configurator /><Footer /></>} />
            <Route path="/experience" element={<><InteriorShowcase /><Footer /></>} />
            <Route path="/checkout" element={<><Checkout /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
