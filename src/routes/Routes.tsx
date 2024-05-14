import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../components/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
