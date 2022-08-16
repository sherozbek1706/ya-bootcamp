import React from "react";

const Tab = (props) => {
  const {title} = props;
  return (
    <div className="tab">
      <h1 className="tabname">{title}</h1>
    </div>
  );
};

export default Tab;
