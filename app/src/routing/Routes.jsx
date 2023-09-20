import { createBrowserRouter } from "react-router-dom";
import AdditionModule from '../components/topics/arithmetic/addition/AdditionModule';
import SubtractionModule from '../components/topics/arithmetic/subtraction/SubtractionModule';
import NotFound from '../components/common/NotFound';
import Home from '../components/screens/Home';
//import Arithmetic from "../components/topics/arithmetic/Arithmetic";
import { ADDITION, ALGEBRA, ARITHMETIC, SUBJECTS, SUBTRACTION } from "../components/common/Constants";
import Subjects from "../components/screens/Subjects";
import Topics from "../components/screens/Topics";
// import PracticePad from "../components/topics/arithmetic/common/PracticePad";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <NotFound/>
    },
    {
      path: SUBJECTS,
      element: <Subjects/>
    },
    {
      path: ARITHMETIC,
      element: <Topics/>
    },
    {
      path: ALGEBRA,
      element: <Topics/>
    },
    {
      path: ADDITION,
      element: <AdditionModule/>
    },
    {
      path: SUBTRACTION,
      element: <SubtractionModule/>
    },
    // {
    //   path: PRACTICEPAD,
    //   element: <PracticePad/>
    // }
])

export default router;