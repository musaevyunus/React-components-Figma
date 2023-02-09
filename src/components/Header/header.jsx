import React from "react";
import './header.css'

export default function Header(){
    return (
        <>
        <div className="header">
            <div className="c"><img src="Group 1.png" alt="gr"/></div>
            <div className="hrefs"> <a href="" className="hrefshead">
            <div className="glav"><a href="" className="glavhref">Главная</a></div>
            <div className="onas"><a href="" className="onashref">О нас</a></div>
            <div className="kontakty"><a href="" className="konthref">Контакты</a></div></a>
            </div>
        </div>
            <hr className="hr" />
            </>
    )
}
