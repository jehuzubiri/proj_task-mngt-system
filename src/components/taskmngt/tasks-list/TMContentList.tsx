import React from "react";

//PLUGINS
import { Collapse, Progress, Button, Popover } from "antd";

const TMContentList: React.FC = () => {
  //states
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className="tmbc_mainlist">
      <div className="tmbc_mainlist_container d-flex-col gap1">
        <div className="headertitle d-flex-row_center-between">
          <p className="left">Task Label</p>
          <div className="right d-flex-row_center">
            <p>Task Status</p>
            <p>SubTask Status</p>
            <p>Date Created</p>
            <p>Action</p>
          </div>
        </div>
        <Collapse
          collapsible="icon"
          items={[
            {
              key: "1",
              label: (
                <div className="taskcoll_label">
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
              children: <p>{text}</p>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TMContentList;
