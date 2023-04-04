import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import { AppProvider } from './context/AppContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Appbar from './components/appbar';
import Hero from './components/hero';
import Editor from './components/editor';
import "./style/App.css"
import About from './components/about';

function App() {

  return (
    <ChakraProvider>
    <AppProvider>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route  path="/" element={<Hero/>}/>
        <Route  path="/editor" element={<Editor/>}/>
        <Route  path="/about" element={<About/>}/>
      </Routes>
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
