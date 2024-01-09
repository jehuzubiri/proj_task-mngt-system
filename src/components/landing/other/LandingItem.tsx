import React, { ReactNode } from "react";

interface Props {
  title: string;
  desc: string;
  children?: ReactNode | any;
}

const CustomCard: React.FC<Props> = ({ title, desc, children }) => {
  return (
    <div className="landing_itemcontainer d-flex-col">
      <div className="texts">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div className="card d-flex-row_center-center">{children}</div>
    </div>
  );
};

export default CustomCard;
