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
          <li data-name="Home">
            <i className="fas fa-home"></i> {/* Home icon */}
          </li>
          <li data-name="Orders">
            <i className="fa fa-book" aria-hidden="true"></i>{" "}
            {/* Orders icon */}
          </li>
          <li data-name="Reservation">
            <i className="fa fa-bookmark" aria-hidden="true"></i>{" "}
            {/* Bookmarks icon */}
          </li>
          <li data-name="About">
            <i className="fas fa-info-circle"></i> {/* About icon */}
          </li>
          <li data-name="Services">
            <i className="fas fa-cogs"></i> {/* Services icon */}
          </li>
          <li data-name="Contact">
            <i className="fas fa-envelope"></i> {/* Contact icon */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPanel;
