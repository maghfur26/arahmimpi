import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import Outline from "../components/Outline";
import DetailPages from "../pages/DetailPages";

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
      {
        path: "/layanan/:slug",
        element: <DetailPages />,
      },
    ],
  },
]);

export default router;
