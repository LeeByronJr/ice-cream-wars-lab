import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState(46);
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad${darkMode ? " dark" : ""}`}>
        <h3>Vote For</h3>
        <p style={{ fontSize: size + "px" }}>{flavor}</p>
      </div>
      <h3>What to Support</h3>
      <div>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button onClick={() => setDarkMode(false)} disabled={!darkMode}>
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div>
        <button onClick={() => setSize((prev) => prev - 1)}>Down</button>
        <p>{size}</p>
        <button onClick={() => setSize((prev) => prev + 1)}>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
