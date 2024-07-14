import React, { useEffect } from "react";
import "./App.css";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";
import { useState } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  hats: 28,
  mouths: 17,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(9);
  const [hair, setHair] = useState(9);
  const [hats, setHats] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [eyes, setEyes] = useState(10);
  const [eyebrows, setEyebrows] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [layer1, setLayer1] = useState(2);
  const [layer2, setLayer2] = useState(3);
  const [layer3, setLayer3] = useState(0);

  const randomize = () => {
    setBody(Math.ceil(Math.random() * total.body));
    setHair(Math.ceil(Math.random() * total.hair));
    setMouths(Math.ceil(Math.random() * total.mouths));
    setEyes(Math.ceil(Math.random() * total.eyes));
    setEyebrows(Math.ceil(Math.random() * total.eyebrows));
    setGlasses(Math.ceil(Math.random() * total.glasses));
    setLayer1(Math.ceil(Math.random() * total.clothing1));
    setLayer2(Math.ceil(Math.random() * total.clothing2));
    setLayer3(Math.ceil(Math.random() * total.clothing3));
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="app">
      <h1>CHARACTER</h1>
      <h2>🛠️Customization🛠️</h2>
      <div className="divider"></div>
      <div className="container">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              hair={hair}
              mouths={mouths}
              eyes={eyes}
              eyebrows={eyebrows}
              glasses={glasses}
              layer_1={layer1}
              layer_2={layer2}
              layer_3={layer3}
            />
            <div className="randomize">
              <button className="randomize-btn" onClick={() => randomize()}>
                RANDOMIZE!
              </button>
            </div>
          </div>
        </div>
        <div className="part-list-wrapper">
          <div className="part-list">
            <h2>Body</h2>
            <PartList
              path="body"
              total={total.body}
              setPart={setBody}
              selected={body}
            />
          </div>
          <div className="part-list">
            <h2>HAIR</h2>
            <PartList
              path="hair"
              total={total.hair}
              setPart={setHair}
              selected={hair}
            />
          </div>
          <div className="part-list">
            <h2>HAT</h2>
            <PartList
              path="accessories/hats"
              total={total.hats}
              setPart={setHats}
              selected={hats}
            />
          </div>
          <div className="part-list">
            <h2>MOUTHS</h2>
            <PartList
              path="mouths"
              total={total.mouths}
              setPart={setMouths}
              selected={mouths}
            />
          </div>
          <div className="part-list">
            <h2>EYE</h2>
            <PartList
              path="eyes"
              total={total.eyes}
              setPart={setEyes}
              selected={eyes}
            />
          </div>
          <div className="part-list">
            <h2>EYEBROWs</h2>
            <PartList
              path="eyebrows"
              total={total.eyebrows}
              setPart={setEyebrows}
              selected={eyebrows}
            />
          </div>
          <div className="part-list">
            <h2>GLASSES</h2>
            <PartList
              path="accessories/glasses"
              total={total.glasses}
              setPart={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="part-list">
            <h2>CLOTHING - L1</h2>
            <PartList
              path="clothes/layer_1"
              total={total.clothing1}
              setPart={setLayer1}
              selected={layer1}
            />
          </div>
          <div className="part-list">
            <h2>CLOTHING - L2</h2>
            <PartList
              path="clothes/layer_2"
              total={total.clothing2}
              setPart={setLayer2}
              selected={layer2}
            />
          </div>
          <div className="part-list">
            <h2>CLOTHING - L3</h2>
            <PartList
              path="clothes/layer_3"
              total={total.clothing3}
              setPart={setLayer3}
              selected={layer3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
