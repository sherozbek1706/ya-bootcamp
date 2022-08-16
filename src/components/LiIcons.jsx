import React from "react";
import html from "../assets/dasturlar/html.png";
import css from "../assets/dasturlar/css.png";
import js from "../assets/dasturlar/js.png";
import aos from "../assets/dasturlar/aos.jpg";
import bootstrap from "../assets/dasturlar/bootstrap.png";
import netlify from "../assets/dasturlar/netlify.png";
import resume from "../assets/dasturlar/resume.png";
import vercel from "../assets/dasturlar/vercel.svg";
import github from "../assets/dasturlar/github.png";
import gitbush from "../assets/dasturlar/git-bash.png";
import parallax from "../assets/dasturlar/parallax.png";
import slick from "../assets/dasturlar/slick.png";
const LiIcons = () => {
  const icons = [
    {
      id: 1,
      url: html,
      name: "HTML",
    },
    {
      id: 2,
      url: css,
      name: "CSS",
    },
    {
      id: 3,
      url: gitbush,
      name: "Git Bush",
    },
    {
      id: 4,
      url: github,
      name: "Git Hub",
    },
    {
      id: 5,
      url: bootstrap,
      name: "Bootstrap 5",
    },
    {
      id: 6,
      url: js,
      name: "JavaScript",
    },
    {
      id: 7,
      url: aos,
      name: "AOS JS",
    },
    {
      id: 8,
      url: parallax,
      name: "Parallax JS",
    },
    {
      id: 9,
      url: slick,
      name: "Slick-Slider JS",
    },
    {
      id: 10,
      url: resume,
      name: "Resume",
    },
    {
      id: 11,
      url: netlify,
      name: "Netlify",
    },
    {
      id: 12,
      url: vercel,
      name: "Vercel",
    },

  ];

  return (
    <div className="language-icons">
      {icons.map((icon) => (
        <div className="li-icon" key={icon.id} >
          <img src={icon.url} alt={icon.name} />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LiIcons;
