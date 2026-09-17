import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

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
