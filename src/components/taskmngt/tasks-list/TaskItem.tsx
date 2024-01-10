import React, { useState, useEffect } from "react";

//PLUGINS
import { Collapse, Progress, Button, Popover, Space, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../store/feature/tasksSlice";

//COMPONENTS
import TaskItemChild from "./TaskItemChild";

//HELPERS
import { StatusOptTypes, TaskDetails } from "@/helpers/Model";

const TaskItem: React.FC<{
  task: TaskDetails;
}> = ({ task }) => {
  //plugins
  const dispatch = useDispatch();

  //states
  const { key, title, dateCreated, status, imgatt, subtasks } = task;

  //states main
  const [subTProg, setSubTProg] = useState<number>(0);
  const [statusLabel, setStatusLabel] = useState<
    "Todo" | "In Progress" | "Completed"
  >("Todo");

  //functions
  const handleStatus = (e: RadioChangeEvent) => {
    let newDetails: TaskDetails = { ...task };
    let newStats: StatusOptTypes = e.target.value;
    newDetails.status = newStats;
    dispatch(updateTask(newDetails));
  };

  //eff
  useEffect(() => {
    switch (status) {
      case "todo":
        setStatusLabel("Todo");
        break;
      case "inprog":
        setStatusLabel("In Progress");
        break;
      case "completed":
        setStatusLabel("Completed");
        break;
    }
  }, [status]);

  useEffect(() => {
    if (subtasks.length) {
      const items = subtasks.length;
      const doneItem = [...subtasks].filter((i) => i.isDone).length;
      const val: number = parseFloat(((doneItem / items) * 100).toFixed(2));
      setSubTProg(val);
    } else setSubTProg(0);
  }, [subtasks]);

  return (
    <Collapse
      key={key}
      collapsible="icon"
      items={[
        {
          key: "1",
          label: (
            <div className="taskitem_label">
              <p className="title">{title}</p>
              <div className="infosandactions">
                <div className={`item status ${status}`}>
                  <p>{statusLabel}</p>
                </div>
                <div className="item subtasks">
                  <p>SubTasks:</p>
                  <Progress
                    percent={subTProg}
                    size="small"
                    status={subTProg === 100 ? "success" : "normal"}
                  />
                </div>
                <div className="item date">
                  <p>{dateCreated}</p>
                </div>
                <div className="item actions">
                  <Popover
                    content={
                      <Radio.Group onChange={handleStatus} value={status}>
                        <Space direction="vertical">
                          <Radio value="todo">Todo</Radio>
                          <Radio value="inprog">In Progress</Radio>
                          <Radio value="completed">Completed</Radio>
                        </Space>
                      </Radio.Group>
                    }
                    title="Update Status"
                    trigger="click"
                    placement="topLeft"
                  >
                    <Button type="link" size="small">
                      Update
                    </Button>
                  </Popover>
                  <Button
                    type="link"
                    danger
                    size="small"
                    onClick={() => dispatch(deleteTask(task))}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ),
          children: <TaskItemChild task={task} />,
        },
      ]}
    />
  );
};

export default TaskItem;
