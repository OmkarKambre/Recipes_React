import React from 'react';
import Cards from './Cards'; 
import Footer from './Footer';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About';
import Nav1 from './Nav1';
import Indian from './pages/Indian';
import Thai from './pages/Thai';
import Chinese from './pages/Chinese';
import Milkshake from './pages/Milkshake';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Home/></>
    },
    {
      path:"/about",
      element: <><About/></>
    },
    {
        path:"/chinese",
        element: <><Chinese/></>
      
    },
    {
        path:"/thai",
        element: <><Thai/></>
      
    },
    {
        path:"/milkshake",
        element: <><Milkshake/></>
      
    },
    {
        path:"/indian",
        element: <><Indian/></>
      
    },
  ])

  return (
  <>
  <RouterProvider router={router}/>
   
  </>
  )
}

export default App;
