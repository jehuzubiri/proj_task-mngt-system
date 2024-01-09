import React, { useEffect, useState } from "react";

//PLUGINS
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//HELPERS
import { DrawerConfigType } from "@/helpers/Model";

//COMPONENTS
import TMHeader from "./main/TMHeader";
import TMContentActions from "./main/TMContentActions";
import TMDrawer from "./main/TMDrawer";
import TMCreateTaskForm from "./main/TMCreateTaskForm";

const TaskMngt: React.FC = () => {
  //plugins
  const navigate = useNavigate();

  //retux store
  const { isLoggedin } = useSelector((state: any) => state.accountstore);

  //states
  const [descending, setDescending] = useState<boolean>(true);
  const [drawerConfig, setDrawerConfig] = useState<DrawerConfigType>({
    isOpen: false,
    fType: "addform",
    title: "Create New Task",
  });

  //functions
  const drawerOnClose = () => {
    setDrawerConfig({
      isOpen: false,
      fType: drawerConfig.fType,
      title: drawerConfig.title,
    });
  };

  //eff
  // useEffect(() => {
  //   if (!isLoggedin) navigate("/");
  // }, [isLoggedin]);

  return (
    <section className="tasksmain d-flex-col">
      <TMHeader />
      <div className="tasksmain_body">
        <div className="tasksmain_body_container d-flex-col">
          <TMContentActions
            descending={descending}
            setDescending={setDescending}
            setDrawerConfig={setDrawerConfig}
          />
        </div>
        <TMDrawer drawerConfig={drawerConfig} drawerOnClose={drawerOnClose}>
          <TMCreateTaskForm />
        </TMDrawer>
      </div>
    </section>
  );
};

export default TaskMngt;
