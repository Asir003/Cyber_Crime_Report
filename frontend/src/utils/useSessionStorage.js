import { useState, useEffect } from 'react';

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return sessionStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const newValue = sessionStorage.getItem(key) || defaultValue;
      setValue(newValue);
    };

    // Listen for storage events (from other tabs)
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom events (from same tab)
    window.addEventListener('sessionStorageChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sessionStorageChange', handleStorageChange);
    };
  }, [key, defaultValue]);

  const setSessionStorageValue = (newValue) => {
    sessionStorage.setItem(key, newValue);
    setValue(newValue);
    // Dispatch custom event to notify other components in the same tab
    window.dispatchEvent(new CustomEvent('sessionStorageChange', { detail: { key, value: newValue } }));
  };

  return [value, setSessionStorageValue];
}
