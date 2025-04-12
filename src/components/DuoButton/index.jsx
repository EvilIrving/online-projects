import React from "react";
import "./index.css";

function DuolingoButton({
  label,
  selected = false,
  color = "#58CC02",
  onClick,
}) {
  const styleVars = {
    "--btn-bg": color,
    "--btn-lip": selected ? "0px" : "4px",
    "--btn-lip-color": darken(color, 0.1),
  };

  return (
    <button
      onClick={onClick}
      className={`duolingo-btn ${selected ? "selected" : ""}`}
      style={styleVars}
    >
      {label}
    </button>
  );
}

function darken(hex, amount) {
  let col = hex.replace("#", "");
  if (col.length === 3)
    col = col
      .split("")
      .map((c) => c + c)
      .join("");
  const num = parseInt(col, 16);
  let r = (num >> 16) - 255 * amount;
  let g = ((num >> 8) & 0x00ff) - 255 * amount;
  let b = (num & 0x0000ff) - 255 * amount;

  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return `rgb(${r}, ${g}, ${b})`;
}

export default DuolingoButton;
