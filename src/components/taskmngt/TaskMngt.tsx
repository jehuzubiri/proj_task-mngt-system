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
import TMContentList from "./tasks-list/TMContentList";

const TaskMngt: React.FC = () => {
  //plugins
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  //retux store
  const { isLoggedin } = useSelector((state: any) => state.accountstore);
  const { taskList, searchInput } = useSelector(
    (state: any) => state.tasksstore
  );

  //states

  const [descending, setDescending] = useState<boolean>(true);
  const [dataList, setDataList] = useState<TaskDetails[]>([]);
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);
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

  //effects
  useEffect(() => {
    const newList = [...taskList]
      .filter((task) => {
        return hideCompleted ? task.status !== "completed" : task;
      })
      .filter((task) => {
        return searchInput !== ""
          ? task.title.toLowerCase().includes(searchInput)
          : task;
      });
    setDataList(newList);
  }, [taskList, descending, hideCompleted, searchInput]);

  useEffect(() => {
    if (!isLoggedin) navigate("/");
  }, [isLoggedin]);

  return (
    <section className="tasksmain d-flex-col">
      <TMHeader />
      <div className="tasksmain_body">
        <div className="tasksmain_body_container d-flex-col gap2">
          <TMContentActions
            descending={descending}
            setDescending={setDescending}
            setDrawerConfig={setDrawerConfig}
            hideCompleted={hideCompleted}
            setHideCompleted={setHideCompleted}
          />
          <TMContentList dataList={dataList} />
        </div>
        <TMDrawer drawerConfig={drawerConfig} drawerOnClose={drawerOnClose}>
          {drawerConfig.fType === "addform" ? (
            <TMCreateTaskForm
              form={form}
              formData={formData}
              setFormData={setFormData}
              onFinish={onFinish}
              drawerOnClose={drawerOnClose}
              stName={stName}
              setStName={setStName}
              stItems={stItems}
              setStItems={setStItems}
            />
          ) : (
            <p>Deleted Lists</p>
          )}
        </TMDrawer>
      </div>
    </section>
  );
};

export default TaskMngt;
