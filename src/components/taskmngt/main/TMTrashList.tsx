import React from "react";

//PLUGINS
import { Empty, Button } from "antd";
import { FaRegFileLines } from "react-icons/fa6";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { restoreTask, emptyTrash } from "../../../store/feature/tasksSlice";

//HELPERS
import { TaskDetails } from "@/helpers/Model";

const TMTrashList: React.FC = () => {
  //plugins
  const dispatch = useDispatch();

  //store
  const { taskTrash } = useSelector((state: any) => state.tasksstore);

  return (
    <div className="trashlist">
      {taskTrash.length ? (
        <div className="trashlist_container">
          <div className="trashlist_container_action">
            <Button type="link" onClick={() => dispatch(emptyTrash(""))}>
              Delete All Forever
            </Button>
          </div>
          <div className="trashlist_container_list">
            {taskTrash.map((task: TaskDetails) => (
              <div key={task.key} className="trash_item d-flex-row_center">
                <div className="title d-flex-row_center">
                  <FaRegFileLines />
                  <p>{task.title}</p>
                </div>
                <Button type="link" onClick={() => dispatch(restoreTask(task))}>
                  Restore
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="trashlist_empty d-flex-col_center">
          <Empty description="" />
        </div>
      )}
    </div>
  );
};

export default TMTrashList;
