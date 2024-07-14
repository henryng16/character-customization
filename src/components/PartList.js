import React from "react";

function PartList({ path, total, setPart, body }) {
  const part = [];
  for (let i = 0; i < total; i++) {
    const partUrl = (
      <div key={path + i}>
        <img
          className="items"
          src={`/character/${path}/${i + 1}.png`}
          alt=""
          style={{ width: "50px" }}
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
