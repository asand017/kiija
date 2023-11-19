import { createBrowserRouter } from "react-router-dom";
import NotFound from '../components/common/NotFound';
import Home from '../components/screens/Home';
import { ADDITION, ALGEBRA, ARITHMETIC, PROBLEMSET, SUBJECTS, SUBTRACTION, SUMMARY } from "../components/common/Constants";
import Subjects from "../components/screens/Subjects";
import Topics from "../components/screens/Topics";
import Criteria from "../components/screens/Criteria";
import Problem from "../components/screens/Problem";
import Summary from "../components/screens/Summary";

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
      element: <Criteria/>
    },
    {
      path: SUBTRACTION,
      element: <Criteria/>
    },
    {
      path: PROBLEMSET,
      element: <Problem/>
    },
    {
      path: SUMMARY,
      element: <Summary/>
    }
])

export default router;