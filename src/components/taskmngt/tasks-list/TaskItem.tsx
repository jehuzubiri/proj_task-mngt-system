import React, { useState, useEffect } from "react";

//PLUGINS
import { Collapse, Progress, Button, Popover } from "antd";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../../store/feature/tasksSlice";

//COMPONENTS
import TaskItemChild from "./TaskItemChild";

//HELPERS
import { TaskDetails } from "@/helpers/Model";

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
    "Pending" | "In Progress" | "Completed"
  >("Pending");

  //eff
  useEffect(() => {
    switch (status) {
      case "todo":
        setStatusLabel("Pending");
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
      setSubTProg((doneItem / items) * 100);
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
                  <Popover
                    content={<p>Some Content</p>}
                    title="Update Status"
                    trigger="click"
                    placement="topLeft"
                  >
                    <p>{statusLabel}</p>
                  </Popover>
                </div>
                <div className="item subtasks">
                  <p>SubTasks:</p>
                  <Progress percent={subTProg} size="small" status="normal" />
                </div>
                <div className="item date">
                  <p>{dateCreated}</p>
                </div>
                <div className="item actions">
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
