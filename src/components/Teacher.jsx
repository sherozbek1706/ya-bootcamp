import React from "react";
import teacher from '../assets/teacher.jpg';
const Teacher = () => {
  return (
    <div className="card-teacher">
      <h2>BOOTCAMP USTOZI</h2>
      <div className="teacher">
        <img src={teacher} alt="Teacher" />
        <div className="info">
          <h1>Baxtiyorov She'rozbek Ergash o'g'li</h1>
          <p>
            FOUNDATION SPEED va FRONTEND BOOTCAMP kurslari muallifi . Frontend
            dasturchi , ustoz Baxtiyorov She'rozbek . <b>YANGI AVLOD</b> O'quv
            markazida Kompyuter Sohasi bo'yicha o'qituvchi .
            <b>
              <a href="http://play-net.vercel.app/">Play.NET</a>
            </b>
            Platformasi Asoschisi .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
