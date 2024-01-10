import React from "react";

//REDUX
import { useSelector } from "react-redux";

//PLUGINS
import { Empty, Table } from "antd";

const AdminAccList: React.FC = () => {
  //retux store
  const { accountList } = useSelector((state: any) => state.accountstore);

  //states
  const columns = [
    {
      title: "Name",
      dataIndex: "givenname",
      key: "givenname",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];

  return (
    <div className="accountlist">
      {accountList.length ? (
        <Table size="small" dataSource={accountList} columns={columns} />
      ) : (
        <div className="accountlist_empty d-flex-row_center-center">
          <Empty description="" />
        </div>
      )}
    </div>
  );
};

export default AdminAccList;
