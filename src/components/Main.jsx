import React from "react";
import content from "../assets/main-content-image.png";
const Main = () => {
  return (
    <main>
      <div className="main-content-name">
        <h3 className="center_name">YANGI &nbsp; AVLOD</h3>
        <h1 className="course_name">FRONTEND BOOTCAMP</h1>
      </div>
      <div className="main-content">
        <img
          className="main-content-image"
          src={content}
          alt="Main ContentImage"
        />
      </div>
    </main>
  );
};

export default Main;
