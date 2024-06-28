import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const employees = window.__INITIAL_DATA__;
console.log(employees)
const container = document.getElementById('root');
hydrateRoot(container, <App employees={employees} />);
