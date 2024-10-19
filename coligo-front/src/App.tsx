import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import requireAuth from './components/requireAuth/requireAuth';

function App() {
  return <Dashboard/>;
}

export default requireAuth(App);
