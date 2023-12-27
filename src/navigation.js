import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { Blog } from "./pages/Blog";

export const nav = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/create",
    element: <Create />,
    isPrivate: true,
  },
  {
    path: "/blog",
    element: <Blog />,
    isPrivate: false,
  },
];
