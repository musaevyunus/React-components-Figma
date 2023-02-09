import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="c">
          <img src="Group 1.png" alt="gr" />
        </div>
        <div className="hrefs">
          {" "}
          <a href="" className="glavhref">
            Главная
          </a>
          <a href="" className="glavhref">
            О нас
          </a>
          <a href="" className="glavhref">
            Контакты
          </a>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}
