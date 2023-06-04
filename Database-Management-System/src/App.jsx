import { Nav } from './Nav'
import './App.css'

function App() {
  (function() {
    const buttons = document.querySelectorAll(".content button");
  
    buttons.forEach(button => {
      ["mouseenter", "mouseout"].forEach(evt => {
        button.addEventListener(evt, e => {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
          
          const span = button.querySelector("span");
  
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        });
      });
    });
  })

  return (
    <dev>
      <Nav/>
    </dev>
  )
}

export default App