import React from "react";

//HELPERS
import { SubTaskDetails, TaskDetails } from "@/helpers/Model";

const TaskItemChild: React.FC<{
  // subtasks: SubTaskDetails[];
  task: TaskDetails;
}> = ({ task }) => {
  //states
  const { key, title, dateCreated, status, imgatt, subtasks } = task;

  return (
    <div className="taskitem_children">
      <p>TaskItemChild</p>
    </div>
  );
};

export default TaskItemChild;
