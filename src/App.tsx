import React from "react";
import "./App.scss";
import routes from "./routes/Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <section className="mainapp">
      <RouterProvider router={createBrowserRouter(routes())} />
      <footer>
        <p className="textdesc">
          TK Services Int. LTD Assessment Test by Jehu Zubiri
        </p>
      </footer>
    </section>
  );
};

export default App;
