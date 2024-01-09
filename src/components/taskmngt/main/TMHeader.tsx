import React from "react";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../store/feature/accountSlice";
import { resetTaskStore } from "../../../store/feature/tasksSlice";

//PLUGINS
import { BiTask } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const TMHeader: React.FC = ({}) => {
  //plugins
  const dispatch = useDispatch();

  //retux store
  const { accountDetails, isLoggedin } = useSelector(
    (state: any) => state.accountstore
  );

  return (
    <div className="tasksmain_header d-flex-row_center-between">
      <div className="item tasksmain_header_apptitle d-flex-row_center gap1">
        <BiTask />
        <p>Task Management System</p>
      </div>
      <div className="item tasksmain_header_logout d-flex-row_center gap1">
        <p>{`Hi ${isLoggedin ? accountDetails.givenname : "Person"}`}</p>
        <img src={isLoggedin ? accountDetails.imgUrl : null} alt="" />
        <p className="pipe">|</p>
        <div
          className="button d-flex-row_center gap1"
          onClick={() => {
            if (!isLoggedin) return;
            dispatch(resetTaskStore(""));
            dispatch(logOut(""));
          }}
        >
          <p>Logout</p>
          <FiLogOut />
        </div>
      </div>
    </div>
  );
};

export default TMHeader;
