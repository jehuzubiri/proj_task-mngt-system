import MainApp from "../components/taskmngt/MainApp";
import Landing from "../components/landing/Landing";

const routes = (): Array<Object> => [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/main",
    element: <MainApp />,
  },
];

export default routes;
