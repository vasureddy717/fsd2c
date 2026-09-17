import React from "react";
import { createRoot } from "react-dom/client";

function ButtonClickHandler() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <h2>Button Click Event</h2>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <ButtonClickHandler />
);
