import React from "react";

//HELPERS
import { DrawerConfigType } from "@/helpers/Model";

//PLUGINS
import { Drawer } from "antd";
import { IoClose } from "react-icons/io5";

//TS States
interface Props {
  drawerConfig: DrawerConfigType;
  drawerOnClose: () => void;
  children?: any;
}

const TMDrawer: React.FC<Props> = ({
  drawerConfig,
  drawerOnClose,
  children,
}) => {
  return (
    <Drawer
      title={drawerConfig.title}
      placement="right"
      closeIcon={<IoClose onClick={() => drawerOnClose()} />}
      width={"55rem"}
      open={drawerConfig.isOpen}
      getContainer={false}
    >
      <div className="drawercontainer">{children}</div>
    </Drawer>
  );
};

export default TMDrawer;
