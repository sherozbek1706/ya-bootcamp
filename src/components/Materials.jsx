import React from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Materials = () => {
  const materials = [
    {
      id: 1,
      paragraf: "100 soatdan ortiq Offline dars.",
    },
    {
      id: 2,
      paragraf: "PDF va Maqolalar",
    },
    {
      id: 13,
      paragraf: "Materiallar",
    },
    {
      id: 14,
      paragraf: "20+ Loyiha",
    },
    {
      id: 16,
      paragraf: "Mentorlar",
    },
  ];

  return (
    <div className="materials">
      {materials.map((material) => (
        <div key={material.id}  className="material">
          <i>
            <BsBookmarkCheckFill />
          </i>
          <p className="material_name">{material.paragraf}</p>
        </div>
      ))}
    </div>
  );
};

export default Materials;
