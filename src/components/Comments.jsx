import React from "react";
import sanjar from "../assets/commnets/asliddin.jpg";
import asilbek from "../assets/commnets/asilbek.jpg";
import zikrillo from "../assets/commnets/zikrillo.jpg";

const Comments = () => {
  const comments = [
    {
      id: 1,
      url: asilbek,
      name: "Nodirov Asilbek",
      comment:
        "Ishga kirganimdan ko'rinib turibdiki, kursni menga juda katta yordami tegdi. Bu kursgacha men faqat html css va JavaScript boshlang'ich     malumotlarini bilardim. Hozir esa Alhamdulillah junior darajadagi  frontend dasturchi bo'ldim. Bu uchun Mohirdevga katta rahmat",
    },
    {
      id: 2,
      url: sanjar,
      name: "Sanjar Aka",
      comment:
        "Kurs juda yuqori saviyada tayyorlangan. Hamma qo'llanilgan      texnalogiyalar va ular yordamida qilingan har bir proyekt      o'rganuvchilarni kursni bitirgandan so'ng boshqa raqobatchi junior      developer lardan ajralib turishi uchun maxsus tayyorlangan. Isboti      sifatida haxsan o'zim bilan bo'lgan bir voqeani aytsam: JavaScript      bo'limini tugatib, She'roz aka bilan maslahatlashgan xolda u yerda      qilingan loyihani LinkedInga qo'ydim va 2 kun ichida menga bir      kompaniya tomonidan ish taklifi keldi. Ularga aynan shu proyekt      yoqqanini va shunga o'xshagan proyektlar qilib berishimni so'rashdi.      ReactJSni tugatishim bilanoq to'liq frontend developer sifatida ishga      topshirdim va hozirda junior dasturchi bo'lib ishlayman. Eng qizig'i  kurs boshlangandan 3 oy o'tib o'z ishimni topdim",
    },
    {
      id: 3,
      url: zikrillo,
      name: "Zikrillo Shukrullayev",
      comment:
        "Kursda kudayam ko'p ma'lumotlar berilgan. Bemalol kursni bitirib ishga      kirish uchun to'laqonli bilimga ega bo'lish mumkin. Men kursning 50%      qismini bitiriib (intership) ishga kirdim. Hozir ReactJS | Frontend      Dasturchi sifatida amalyot o'tayabman, kursni barchaga masalahat      beraman",
    },
  ];

  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="profile">
            <img src={comment.url} alt={comment.name} />
            <h1>{comment.name}</h1>
          </div>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
