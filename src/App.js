import React from "react";
import "./App.css";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
const body = [];
for (let i = 0; i < total.body; i++) {
  const path = `components/character/body/${i + 1}.png`;
  body.push(path);
  console.log(body);
}

function App() {
  return (
    <div className="app">
      <h1>CHARACTER</h1>
      <h2>Customization</h2>
      <div className="divider"></div>
      <div className="container">
        <div className="avatar-wrapper">
          <p>avatar component</p>
          <button className="randomize-btn">RANDOMIZE!</button>
        </div>
        <div className="part-list-wrapper">
          <div className="part-list">
            <h2>Body</h2>
            {body.map((bodyPart, i) => {
              return (
                <div key={i} style={{ width: "40%" }}>
                  <img src={bodyPart} alt="here" />
                </div>
              );
            })}
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
          <div className="part-list">
            <h2>part-name</h2>
            <p>part component here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
