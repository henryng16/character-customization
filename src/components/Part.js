import React from "react";

function Part({ path, index }) {
  return (
    <img
      className="avatar-layer"
      src={`/character/${path}/${index}.png`}
      alt=""
    />
  );
}

export default Part;
