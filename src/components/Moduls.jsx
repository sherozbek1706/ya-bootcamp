import React from "react";

const Moduls = () => {
  const moduls = [
    {
      id: 1,
      paragraf: "1-modul. HTML ASOSLARI",
    },
    {
      id: 2,
      paragraf: "2-modul. CSS Asoslari",
    },
    {
      id: 3,
      paragraf: "3-modul. Git va Github nima ?",
    },
    {
      id: 14,
      paragraf: "4-modul. Bootstrap 5",
    },
    {
      id: 15,
      paragraf: "5-modul. JavaScript Asoslari",
    },
    {
      id: 16,
      paragraf:
        "6-modul. JavaScript Frameworklari : AOS , Slick Slider , Parallax.",
    },
    {
      id: 7,
      paragraf: "7-modul. Resume Tayyorlash.",
    },
  ];
  return (
    <div className="moduls">
      {moduls.map((modul) => (
        <div className="modul" key={modul.id}>
          <h1 className="modul_name">{modul.paragraf}</h1>
        </div>
      ))}
    </div>
  );
};

export default Moduls;
