import React, { useEffect, useState } from "react";

//PLUGINS
import { useNavigate } from "react-router-dom";
import { Button, Form } from "antd";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/feature/tasksSlice";

//HELPERS
import { DrawerConfigType, TaskDetails } from "@/helpers/Model";
import { getDateTimeNow } from "../../helpers/General";

//COMPONENTS
import TMHeader from "./main/TMHeader";
import TMContentActions from "./main/TMContentActions";
import TMDrawer from "./main/TMDrawer";
import TMCreateTaskForm from "./main/TMCreateTaskForm";

const TaskMngt: React.FC = () => {
  //plugins
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  //retux store
  const { isLoggedin } = useSelector((state: any) => state.accountstore);

  //states
  const [descending, setDescending] = useState<boolean>(true);
  const [stName, setStName] = useState<string>("");
  const [stItems, setStItems] = useState<string[]>([]);
  const [drawerConfig, setDrawerConfig] = useState<DrawerConfigType>({
    isOpen: false,
    fType: "addform",
    title: "Create New Task",
  });
  const [formData, setFormData] = useState<TaskDetails>({
    key: "",
    dateCreated: "",
    title: "",
    status: "todo",
    subtasks: [],
    imgatt: [],
  });

  //functions
  const drawerOnClose = () => {
    setStName("");
    setStItems([]);
    setFormData({
      key: "",
      dateCreated: "",
      title: "",
      status: "todo",
      subtasks: [],
      imgatt: [],
    });
    form.resetFields();
    setDrawerConfig({
      isOpen: false,
      fType: drawerConfig.fType,
      title: drawerConfig.title,
    });
  };

  const onFinish = () => {
    const { title, subtasks, imgatt } = formData;
    const newData: TaskDetails = {
      key: `maintask~${Date.now()}`,
      title,
      dateCreated: getDateTimeNow(),
      status: "todo",
      imgatt,
      subtasks,
    };
    dispatch(addTask(newData));
    drawerOnClose();
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
          {drawerConfig.fType === "addform" ? (
            <>
              <TMCreateTaskForm
                form={form}
                formData={formData}
                setFormData={setFormData}
                onFinish={onFinish}
                stName={stName}
                setStName={setStName}
                stItems={stItems}
                setStItems={setStItems}
              />
              <div className="footeraction">
                <Button
                  disabled={!formData.title.length}
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Create
                </Button>
              </div>
            </>
          ) : (
            <p>Deleted Lists</p>
          )}
        </TMDrawer>
      </div>
    </section>
  );
};

export default TaskMngt;
