import React, { ReactNode } from "react";

interface Props {
  title: string;
  desc: string;
  children?: ReactNode | any;
}

const CustomCard: React.FC<Props> = ({ title, desc, children }) => {
  return (
    <div className="landing_itemcontainer">
      <div className="texts">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <div className="card">{children}</div>
    </div>
  );
};

export default CustomCard;
