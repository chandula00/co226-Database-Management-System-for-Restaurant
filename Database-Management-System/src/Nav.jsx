

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";


export const Nav = () => {
  const menuItems = document.querySelectorAll(".nav li");

  menuItems.forEach((item) => {
    ["mouseenter", "mouseout"].forEach((evt) => {
      item.addEventListener(evt, (e) => {
        let parentOffset = item.getBoundingClientRect(),
          relX = e.clientX - parentOffset.left,
          relY = e.clientY - parentOffset.top;
        console.log(e);
        const span = item.querySelector("span");

        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });
    });
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
      document.querySelector(".nav").classList.add("mobile");
      return;
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".nav").style.top = "0";
    } else {
      document.querySelector(".nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav ul");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navUl.classList.toggle("open");
    });

    return () => {
      menuBtn.removeEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navUl.classList.toggle("open");
      });
    };
  }, []);

  //const navigate = useNavigate();

  return (
    <div class="nav">

      <a/>
      <ul className="nav-items">
        <li className="active" onClick={() => navigate("/Home")}>
          Home<span></span>
        </li>
        <li onClick={() => navigate("/Orders")}>
          Orders<span></span>
        </li>
        <li onClick={() => navigate("/Reservation")}>
          Reservations<span></span>
        </li>
        <li onClick={() => navigate("/authenticate")}><i className="fa fa-sign-out" aria-hidden="true" ></i >&nbsp;
          Log Out<span></span>
        </li>
      </ul>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
};
