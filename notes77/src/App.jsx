import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', padding: '20px', textAlign: 'center' }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;