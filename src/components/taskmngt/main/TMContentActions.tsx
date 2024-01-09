import React from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../../../store/feature/tasksSlice";

//PLUGINS
import { Button, Input } from "antd";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { BsSortDown, BsSortUp } from "react-icons/bs";

//HELPERS
import { DrawerConfigType } from "@/helpers/Model";

const TMContentActions: React.FC<{
  descending: boolean;
  setDescending: React.Dispatch<React.SetStateAction<boolean>>;
  setDrawerConfig: React.Dispatch<React.SetStateAction<DrawerConfigType>>;
}> = ({ descending, setDescending, setDrawerConfig }) => {
  //plugins
  const dispatch = useDispatch();

  //retux store
  const { searchInput } = useSelector((state: any) => state.tasksstore);

  //functions

  return (
    <div className="tmbc_actions d-flex-row_center-between">
      <div className="tmbc_actions_main d-flex-row_center gap1">
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          onClick={() => {
            setDrawerConfig({
              isOpen: true,
              fType: "addform",
              title: "Create New Task",
            });
          }}
        >
          New Task
        </Button>
        <Input
          value={searchInput}
          placeholder="Search task by name"
          prefix={<SearchOutlined />}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
        />
      </div>
      <div className="tmbc_actions_others d-flex-row_center gap2">
        <Button
          icon={descending ? <BsSortDown /> : <BsSortUp />}
          type="link"
          onClick={() => setDescending(!descending)}
        >
          {`Sort by Date (${descending ? "Desc" : "Asc"})`}
        </Button>
        <Button
          icon={<DeleteOutlined />}
          type="link"
          onClick={() => {
            setDrawerConfig({
              isOpen: true,
              fType: "trashbin",
              title: "Recently Deleted Tasks",
            });
          }}
        >
          Deleted Tasks
        </Button>
      </div>
    </div>
  );
};

export default TMContentActions;
