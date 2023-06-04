import "./nav.css"

export const Nav = () => {
  const menuItems = document.querySelectorAll(".nav li");

  menuItems.forEach(item => {
    ["mouseenter", "mouseout"].forEach(evt => {
      item.addEventListener(evt, e => {
        let parentOffset = item.getBoundingClientRect(),
            relX = e.clientX - parentOffset.left,
            relY = e.clientY - parentOffset.top;
        console.log(e)
        const span = item.querySelector("span");

        span.style.top = relY + "px";
        span.style.left = relX + "px";
      });
    });
  });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.querySelector(".nav").classList.add("mobile");
        return
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const menuBtn = document.querySelector(".menu-btn")
const navUl = document.querySelector(".nav ul")

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navUl.classList.toggle("open");})

  return (
    <div class="nav">
      <img
        align="center"
        alt="logo"
        className="logo"
        src="src\assets\My_project.png"
      />
      <ul class="nav-items">
        <li class="active">
          Home<span></span>
        </li>
        <li>
          Orders<span></span>
        </li>
        <li>
          Reservations<span></span>
        </li>
        <li>
          Login<span></span>
        </li>
      </ul>
      <div class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>
    </div>
  );
};
