import TaskMngt from "../components/taskmngt/TaskMngt";
import Landing from "../components/landing/Landing";

const routes = (): Array<Object> => [
  {
    path: "*",
    element: <Landing />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/main",
    element: <TaskMngt />,
  },
];

export default routes;
