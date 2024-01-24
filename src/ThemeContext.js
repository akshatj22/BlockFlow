import React, { createContext, useState, useContext, useEffect } from 'react';
// Create a context for the theme
export const ThemeContext = createContext();
// Create a provider component to wrap your app
export const ThemeContextProvider = ({ children }) => {
    // getLocalstorage => theme => state default
    // const [theme, setTheme] = useState('dark'); // You can set a default theme here
    // Toggle between light and dark themes
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark'; // Set your default theme here
    });
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const delayThemeChange = () => {
       toggleTheme();
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, delayThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

// A custom hook to consume the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};



