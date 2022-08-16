import React from "react";
import wepb1 from "../assets/kim_uchun/1.webp";
import wepb2 from "../assets/kim_uchun/2.webp";
import wepb3 from "../assets/kim_uchun/3.webp";

const ForForm = () => {
  const forBox = [
    {
      id: 1,
      title: "Yangi boshlanuvchilar uchun",
      paragraf:
        "Matematikani yaxshi bilishingiz yoki dasturlash tajribasiga ega bo'lishingiz shart emas. Bosqichma-bosqich veb-saytlarni yaratishni o'rganasiz. Siz oddiy web sahifalaridan oshlaysiz va kurs oxirida siz frameworklarni bilib olasiz, murakkab korporativ websaytlarni yaratasiz va jamoada ishlaysiz.",
      url: wepb1,
    },
    {
      id: 2,
      title: "Boshlang'ich dasturchilar",
      paragraf:
        "Dasturlashni sevimli mashg'ulotdan daromadli kasbga aylantiring. Ilg'or tartib o'nikmalarini egallang, JavaScript va frameworklarni chuqur o'rganing. Bilimlardagi bo'shliqlarni yoping va yirik kompaniyada o'rta darajadagi dasturchi lavozimiga ariza topshirish imkoniyatiga ega bo'ling.",
      url: wepb2,
    },
    {
      id: 3,
      title: "IT sohasida tajribasiz frilanserlar",
      paragraf:
        "Agar siz zerikarli ishlardan charchagan bo'lsangiz va IT sohasida      martabangizni oshirmoqchi bo'lsangiz, kurs veb-ishlab chiqish dunyosi uchun yaxshi qo'llanma bo'ladi. Kursdan so'ng siz kuchli portfolioga, jamoaviy ish tajribasiga va masofadan turib yoki ajoyib jamoada ishlash uchun barcha kerakli bilimlarga ega bo'lasiz.",
      url: wepb3,
    },
  ];

  return (
    <div className="forfrom">
      {forBox.map((box) => (
        <div className="ff-box" key={box.id}>
          <img src={box.url} alt="JavaScript" />
          <h1 className="ff-name">{box.title}</h1>
          <p className="ff-paragraf">{box.paragraf}</p>
        </div>
      ))}
    </div>
  );
};

export default ForForm;
