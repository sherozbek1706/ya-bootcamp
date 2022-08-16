import React from "react";
import { BsQuestionSquareFill } from "react-icons/bs";
const Reklama = () => {
  return (
    <>
      <div className="reklama-text">
        <h1>
          <i><BsQuestionSquareFill/></i>
          Bozorda Mutaxassis Yetarli Emas.
        </h1>
      </div>
      <div className="reklama">
        <div className="info">
          <h1>4100 ta Kompaniya</h1>
          <p>
            endi ular hh.uz ga ko'ra frontend ishlab dasturchilarni
            qidirmoqdalar
          </p>
        </div>
        <div className="info">
          <h1>500 - 1500 Dollar</h1>
          <p>
            New.HR ma'lumotlariga ko'ra, o'rta darajadagi frontend dasturchilar
            ish haqi
          </p>
        </div>
      </div>
    </>
  );
};

export default Reklama;
