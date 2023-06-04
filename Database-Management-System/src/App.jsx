import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Home } from "./Home";

function App() {
  (function () {
    const buttons = document.querySelectorAll(".content button");

    buttons.forEach((button) => {
      ["mouseenter", "mouseout"].forEach((evt) => {
        button.addEventListener(evt, (e) => {
          let parentOffset = button.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

          const span = button.querySelector("span");

          span.style.top = relY + "px";
          span.style.left = relX + "px";
        });
      });
    });
  })(); // Add opening and closing parentheses here

  return (
    <div className="App">
      <Home />
      {/* <Login /> */}
    </div>
  );
}

export default App;
