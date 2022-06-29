import React from 'react';
import { AuthProvider } from './src/Routes';

import Routes from './src/Routes';
// import Home from './src/pages/home'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
