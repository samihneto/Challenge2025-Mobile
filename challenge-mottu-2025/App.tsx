import Routes from '@/navigation';
import React from 'react';
import { AuthContextProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
