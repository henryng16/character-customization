import React from "react";

function PartList({ path, total, setPart, selected, zoom = 1, top = 0 }) {
  const part = [];
  for (let i = 0; i < total; i++) {
    const partUrl = (
      <div
        key={path + i}
        className={
          selected === i + 1 ? "selected items-wrapper" : "items-wrapper"
        }
      >
        <img
          className="items"
          src={`/character/${path}/${i + 1}.png`}
          alt=""
          style={{
            width: "50px",
            transform: `scale(${zoom}) translateY(${top}%)`,
          }}
          onClick={() => {
            setPart(i + 1);
          }}
        />
      </div>
    );
    part.push(partUrl);
  }
  return <div className="part-list-items">{part}</div>;
}

export default PartList;
