import React, { useState } from "react";
import "./MenuPanel.css";

const MenuPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleItemHover = (itemName) => {
    setCurrentItem(itemName);
  };

  return (
    <div className={`menu-panel ${isPanelOpen ? "open" : ""}`}>
      <div className="menu-panel__toggle" onClick={togglePanel}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-panel__content">
        <img
          src="src/assets/My_project.png"
          alt="Logo"
          className="menu-panel__logo"
        />
        <ul>
          <li
            onMouseEnter={() => handleItemHover("Home")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i className="fas fa-home" data-name="Home"></i> {/* Home icon */}
          </li>
          <li
            onMouseEnter={() => handleItemHover("Orders")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i className="fa fa-book" aria-hidden="true" data-name="Orders"></i>{" "}
            {/* Orders icon */}
          </li>
          <li
            onMouseEnter={() => handleItemHover("Reservations")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i
              className="fa fa-bookmark"
              aria-hidden="true"
              data-name="Reservation"
            ></i>{" "}
            {/* Bookmarks icon */}
          </li>
          <li
            onMouseEnter={() => handleItemHover("About")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i className="fas fa-info-circle" data-name="About"></i>{" "}
            {/* About icon */}
          </li>
          <li
            onMouseEnter={() => handleItemHover("Services")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i className="fas fa-cogs" data-name="Services"></i>{" "}
            {/* Services icon */}
          </li>
          <li
            onMouseEnter={() => handleItemHover("Contact")}
            onMouseLeave={() => handleItemHover(null)}
          >
            <i className="fas fa-envelope" data-name="Contact"></i>{" "}
            {/* Contact icon */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPanel;
