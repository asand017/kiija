import { createBrowserRouter } from "react-router-dom";
import AdditionModule from '../components/topics/arithmetic/addition/AdditionModule';
import SubtractionModule from '../components/topics/arithmetic/subtraction/SubtractionModule';
import NotFound from '../components/common/NotFound';
import Home from '../components/Home';
import Arithmetic from "../components/topics/arithmetic/Arithmetic";
import Alegbra from "../components/topics/alegbra/Alegbra";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>
      },
      {
        path: "/arithmetic",
        element: <Arithmetic/>
      },
      {
        path: "/alegbra",
        element: <Alegbra/>
      },
      {
        path: "/arithmetic/addition",
        element: <AdditionModule/>
      },
      {
        path: "/arithmetic/subtraction",
        element: <SubtractionModule/>
      },
])

export default router;