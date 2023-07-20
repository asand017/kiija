import { createBrowserRouter } from "react-router-dom";
import AdditionModule from '../components/topics/arithmetic/addition/AdditionModule';
import SubtractionModule from '../components/topics/arithmetic/subtraction/SubtractionModule';
import NotFound from '../components/common/NotFound';
import Home from '../components/Home';
import Arithmetic from "../components/topics/arithmetic/Arithmetic";
import Alegbra from "../components/topics/alegbra/Alegbra";
import { ADDITION, ALEGBRA, ARITHMETIC, SUBTRACTION } from "../components/common/Constants";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>
      },
      {
        path: ARITHMETIC,
        element: <Arithmetic/>
      },
      {
        path: ALEGBRA,
        element: <Alegbra/>
      },
      {
        path: ADDITION,
        element: <AdditionModule/>
      },
      {
        path: SUBTRACTION,
        element: <SubtractionModule/>
      },
])

export default router;