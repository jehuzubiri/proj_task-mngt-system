import React from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../../../store/feature/tasksSlice";

//PLUGINS
import {
  PlusCircleOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { Button, Input, Checkbox } from "antd";

//HELPERS
import { DrawerConfigType } from "@/helpers/Model";

const TMContentActions: React.FC<{
  descending: boolean;
  setDescending: React.Dispatch<React.SetStateAction<boolean>>;
  setDrawerConfig: React.Dispatch<React.SetStateAction<DrawerConfigType>>;
  hideCompleted: boolean;
  setHideCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  descending,
  setDescending,
  setDrawerConfig,
  hideCompleted,
  setHideCompleted,
}) => {
  //plugins
  const dispatch = useDispatch();

  //retux store
  const { searchInput } = useSelector((state: any) => state.tasksstore);

  //functions
  const handleOpenDrawer = (fType: "addform" | "trashbin", title: string) => {
    setDrawerConfig({
      isOpen: true,
      fType,
      title,
    });
  };

  const onChange = () => {
    // console.log(e.target.checked);
    setHideCompleted(!hideCompleted);
  };

  return (
    <div className="tmbc_actions d-flex-row_center-between">
      <div className="tmbc_actions_main d-flex-row_center gap1">
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          onClick={() => {
            handleOpenDrawer("addform", "Create New Task");
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
        <Checkbox value={hideCompleted} onChange={onChange}>
          Hide Completed
        </Checkbox>
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
            handleOpenDrawer("trashbin", "Recently Deleted Tasks");
          }}
        >
          Recently Deleted
        </Button>
      </div>
    </div>
  );
};

export default TMContentActions;
