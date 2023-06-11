import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdditionModule from './components/topics/addition/AdditionModule';
import SubtractionModule from './components/topics/subtraction/SubtractionModule';
import NotFound from './components/NotFound';
import Home from './components/Home';
import './App.css';

function App() {
  const title = "Are You Ready to Become a Math God?";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home title={title}/>,
      errorElement: <NotFound/>
    },
    {
      path: "/addition",
      element: <AdditionModule/>
    },
    {
      path: "/subtraction",
      element: <SubtractionModule/>
    },
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}
//<Home title={title}/>
export default App;
