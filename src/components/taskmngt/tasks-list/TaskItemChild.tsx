import React, { useState } from "react";

//HELPERS
import { SubTaskDetails, TaskDetails } from "@/helpers/Model";

//PLUGINS
import { Collapse, Progress, Button, Input, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../store/feature/tasksSlice";

const TaskItemChild: React.FC<{
  task: TaskDetails;
}> = ({ task }) => {
  //plugins
  const dispatch = useDispatch();

  //states
  const { subtasks } = task;
  const [subInputVal, setSubInputVal] = useState<string>("");

  //functions
  const handlefSubTask = (
    actSub: SubTaskDetails,
    type: "status" | "delete" | "add"
  ) => {
    let newDetails: TaskDetails = { ...task };
    switch (type) {
      case "status":
        newDetails.subtasks = [...subtasks].map((st) => {
          if (st.key === actSub.key) {
            return {
              ...st,
              isDone: !st.isDone,
            };
          } else return st;
        });
        break;
      case "delete":
        newDetails.subtasks = [...subtasks].filter(
          (st) => st.key !== actSub.key
        );
        break;
      case "add":
        newDetails.subtasks = [...newDetails.subtasks, actSub];
        break;
    }
    dispatch(updateTask(newDetails));
  };

  const fAddNew = () => {
    handlefSubTask(
      {
        isDone: false,
        key: `subtask~${Date.now()}~${
          subtasks.length ? subtasks.length + 1 : 0
        }`,
        title: subInputVal,
      },
      "add"
    );
    setSubInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && subInputVal.length) {
      fAddNew();
    }
  };

  return (
    <div className="taskitem_children">
      <div className="subtaskcontainer">
        {subtasks.length ? (
          <p className="subtaskcontainer_title">
            Note: Use switch to mark subtask item status as done
          </p>
        ) : (
          <p>
            Create sub-task issues to split up larger pieces of work into tasks.
          </p>
        )}
        {subtasks.map((st) => (
          <div
            key={st.key}
            className="subtaskcontainer_item d-flex-row_center gap1"
          >
            <Switch
              size="small"
              value={st.isDone}
              onChange={() => handlefSubTask(st, "status")}
            />
            <p className={st.isDone ? "done" : ""}>{st.title}</p>
            <Button
              danger
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => handlefSubTask(st, "delete")}
            />
          </div>
        ))}
        <div className="subtaskcontainer_addmore d-flex-row_center gap1">
          <Input
            placeholder="Enter new subtask here. You can also press enter key to add."
            value={subInputVal}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setSubInputVal(e.target.value)}
          />
          <Button
            disabled={!subInputVal.length}
            type="primary"
            onClick={() => fAddNew()}
          >
            Add New Subtask
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItemChild;
