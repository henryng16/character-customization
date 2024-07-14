import React from "react";

function Part({ path, index, zIndex }) {
  return (
    <img
      className="avatar-layer"
      src={`/character/${path}/${index}.png`}
      alt=""
      style={{ zIndex }}
    />
  );
}

export default Part;
