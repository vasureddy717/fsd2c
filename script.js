import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function ButtonClickHandler() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Button Click Event"),
    React.createElement(
      "button",
      { onClick: handleClick },
      "Button"
    )
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  React.createElement(ButtonClickHandler)
);
