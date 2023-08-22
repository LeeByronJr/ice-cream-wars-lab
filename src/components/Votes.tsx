import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);
  const totalVotes: number = cVotes + vVotes + sVotes;
  const cPercentage: string = ((cVotes / totalVotes) * 100).toFixed(1) + "%";
  const vPercentage: string = ((vVotes / totalVotes) * 100).toFixed(1) + "%";
  const sPercentage: string = ((sVotes / totalVotes) * 100).toFixed(1) + "%";
  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={() => setCVotes((prev) => prev + 1)}>Chocolate</button>
        <button onClick={() => setVVotes((prev) => prev + 1)}>Vanilla</button>
        <button onClick={() => setSVotes((prev) => prev + 1)}>
          Strawberry
        </button>
      </div>
      {totalVotes ? (
        <>
          {cVotes > 0 && (
            <>
              <p>Chocolate: {`${cVotes}(${cPercentage})`}</p>
              <div
                className="bar"
                id="chocolate"
                style={{ width: cPercentage }}
              ></div>
            </>
          )}
          {vVotes > 0 && (
            <>
              <p>Vanilla: {`${vVotes}(${vPercentage})`}</p>
              <div
                className="bar"
                id="vanilla"
                style={{ width: vPercentage }}
              ></div>
            </>
          )}
          {sVotes > 0 && (
            <>
              <p>Strawberry: {`${sVotes}(${sPercentage})`}</p>
              <div
                className="bar"
                id="strawberry"
                style={{ width: sPercentage }}
              ></div>
            </>
          )}
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </section>
  );
};

export default Votes;
