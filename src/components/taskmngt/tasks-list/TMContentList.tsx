import React from "react";

//PLUGINS
import { Empty } from "antd";

//COMPONENTS
import TaskItem from "./TaskItem";

//HELPERS
import { TaskDetails } from "@/helpers/Model";

const TMContentList: React.FC<{
  dataList: TaskDetails[];
}> = ({ dataList }) => {
  //states

  return (
    <div className="tmbc_mainlist">
      {dataList.length ? (
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
          {dataList.map((task) => (
            <TaskItem task={task} />
          ))}
        </div>
      ) : (
        <div className="tmbc_mainlist_empty d-flex-col_center">
          <Empty description="" />
          <p>Create Tasks to Manage</p>
        </div>
      )}
    </div>
  );
};

export default TMContentList;
