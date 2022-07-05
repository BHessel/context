import React from 'react'
import ContextComponent from './ContextComponent'
import './App.css';
import ThemeProvider from './ThemeContext'

const App = () => {
  
  return (
    <div className="App">
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>

    </div>
  );
}

export default App