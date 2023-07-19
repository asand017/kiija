import { createBrowserRouter } from "react-router-dom";
import AdditionModule from '../components/topics/addition/AdditionModule';
import SubtractionModule from '../components/topics/subtraction/SubtractionModule';
import NotFound from '../components/common/NotFound';
import Home from '../components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
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

export default router;