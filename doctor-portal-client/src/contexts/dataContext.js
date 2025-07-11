// src/contexts/DataContext.js
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/api/data")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}