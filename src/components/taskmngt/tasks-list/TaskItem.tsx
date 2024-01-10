import React from "react";

//PLUGINS
import { Collapse, Progress, Button, Popover } from "antd";

//COMPONENTS
import TaskItemChild from "./TaskItemChild";

const TaskItem: React.FC = () => {
  //states

  return (
    <Collapse
      collapsible="icon"
      items={[
        {
          key: "1",
          label: (
            <div className="taskitem_label">
              <p className="title">Sample Task Title Here</p>
              <div className="infosandactions">
                <div className="item status completed">
                  <Popover
                    content={<p>Some Content</p>}
                    title="Update Status"
                    trigger="click"
                    placement="topLeft"
                  >
                    <p>Completed</p>
                  </Popover>
                </div>
                <div className="item subtasks">
                  <p>SubTasks:</p>
                  <Progress
                    percent={(1 / 2) * 100}
                    size="small"
                    status="normal"
                  />
                </div>
                <div className="item date">
                  <p>1:20 AM January 10, 2024</p>
                </div>
                <div className="item actions">
                  <Button type="link" danger size="small">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ),
          children: <TaskItemChild />,
        },
      ]}
    />
  );
};

export default TaskItem;
