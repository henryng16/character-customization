import React from "react";
import Part from "./Part";

function Avatar({
  body,
  hair,
  facial_hair,
  eyes,
  eyebrows,
  glasses,
  layer_1,
  layer_2,
  layer_3,
}) {
  return (
    <>
      <div className="avatar">
        <Part path="body" index={body} />
        <Part path="hair" index={hair} />
        <Part path="facial_hair" index={facial_hair} />
        <Part path="eyes" index={eyes} />
        <Part path="eyebrows" index={eyebrows} />
        <Part path="accessories/glasses" index={glasses} />
        <Part path="clothes/layer_1" index={layer_1} />
        <Part path="clothes/layer_2" index={layer_2} />
        <Part path="clothes/layer_3" index={layer_3} />
      </div>
    </>
  );
}

export default Avatar;
