import HelloWorld from './HelloWorld';
import HelloWorldGet from './HelloWorldGet';
import ResponsiveAppBar from './Layout/Header';
import { Account } from './Pages/Account';
import { Home } from './Pages/Home'
import { Samplewebform } from './Pages/SampleWebForm';
import { webform, webOptions } from '../store.js'
import { Paper } from '@mui/material'
import UserCreated from './Layout/UserCreated';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Forms" element={<Samplewebform/>} />

      </Routes>

      {/* <Home /> */}
      {/* <Paper>
        <Samplewebform />
      </Paper> */}
      

        {/* <UserCreated /> */}
      

      
      
      {/* <HelloWorldGet /> */}

      {/* <Account /> */}
    </div>
  );
}

export default App;
