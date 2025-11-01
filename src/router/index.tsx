import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import Outline from "../components/Outline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outline />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePages />,
      },
    ],
  },
]);

export default router;
