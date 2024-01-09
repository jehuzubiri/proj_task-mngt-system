import React from "react";

//PLUGINS
import { BiTask } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const TMHeader: React.FC = ({}) => {
  return (
    <div className="tasksmain_header d-flex-row_center-between">
      <div className="item tasksmain_header_apptitle d-flex-row_center gap1">
        <BiTask />
        <p>Task Management System</p>
      </div>
      <div className="item tasksmain_header_logout d-flex-row_center gap1">
        <p>Hi Jehu</p>
        <p className="pipe">|</p>
        <div className="button d-flex-row_center gap1">
          <p>Logout</p>
          <FiLogOut />
        </div>
      </div>
    </div>
  );
};

export default TMHeader;
