import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const menuItems = document.querySelectorAll(".nav li");

    menuItems.forEach((item) => {
      ["mouseenter", "mouseout"].forEach((evt) => {
        item.addEventListener(evt, (e) => {
          const parentOffset = item.getBoundingClientRect();
          const relX = e.clientX - parentOffset.left;
          const relY = e.clientY - parentOffset.top;
          const span = item.querySelector("span");

          span.style.top = relY + "px";
          span.style.left = relX + "px";
        });
      });
    });

    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav ul");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navUl.classList.toggle("open");
    });

    return () => {
      menuItems.forEach((item) => {
        ["mouseenter", "mouseout"].forEach((evt) => {
          item.removeEventListener(evt, (e) => {
            const parentOffset = item.getBoundingClientRect();
            const relX = e.clientX - parentOffset.left;
            const relY = e.clientY - parentOffset.top;
            const span = item.querySelector("span");

            span.style.top = relY + "px";
            span.style.left = relX + "px";
          });
        });
      });

      menuBtn.removeEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navUl.classList.toggle("open");
      });
    };
  }, []);

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="nav">
      <a />
      <ul className="nav-items">
        <li className={location.pathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")}>
          Home<span></span>
        </li>
        <li className={location.pathname === "/Orders" ? "active" : ""} onClick={() => handleItemClick("/Orders")}>
          Orders<span></span>
        </li>
        <li className={location.pathname === "/Reservations" ? "active" : ""} onClick={() => handleItemClick("/Reservations")}>
          Reservations<span></span>
        </li>
        <li className={location.pathname === "/authenticate" ? "active" : ""} onClick={() => handleItemClick("/authenticate")}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Log Out<span></span>
        </li>
      </ul>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
};
