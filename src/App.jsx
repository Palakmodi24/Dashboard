import Dashboard from "./pages/Dashboard/Dashboard"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import TransactionPage from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <TransactionPage/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
