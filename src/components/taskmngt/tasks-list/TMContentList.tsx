import React from "react";

//PLUGINS
import { Collapse, Progress, Button, Popover } from "antd";

//COMPONENTS
import TaskItem from "./TaskItem";

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
        <TaskItem />
      </div>
    </div>
  );
};

export default TMContentList;
