import React from "react";
import Part from "./Part";

function Avatar({
  body,
  hair,
  hats,
  mouths,
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
        <Part path="body" index={body} zIndex={0} />
        <Part path="hair" index={hair} zIndex={10} />
        <Part path="accessories/hats" index={hats} zIndex={12} />
        <Part path="mouths" index={mouths} zIndex={1} />
        <Part path="eyes" index={eyes} zIndex={2} />
        <Part path="eyebrows" index={eyebrows} zIndex={2} />
        <Part path="accessories/glasses" index={glasses} zIndex={8} />
        <Part path="clothes/layer_1" index={layer_1} zIndex={3} />
        <Part path="clothes/layer_2" index={layer_2} zIndex={4} />
        <Part path="clothes/layer_3" index={layer_3} zIndex={5} />
      </div>
    </>
  );
}

export default Avatar;
