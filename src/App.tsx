import * as React from "react";
import "./App.css";
import fightersList from "./fighters_list.json";

const classes = {
  selected: {
    backgroundColor: "green",
    color: "white",
    width: 130,
  },
  notSelected: {
    backgroundColor: "white",
    color: "black",
    width: 130,
  },
};

function App() {
  const [fighters, setFighters] = React.useState(fightersList);
  const [selectedFighter, setSelectedFighter] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: "100%",
          cursor: "pointer",
          marginBottom: 25,
        }}
      >
        {fighters.map((fighter, i) => (
          <button
            style={fighter.selected ? classes.selected : classes.notSelected}
            onClick={() => {
              let fightersCopy = [...fighters];
              fightersCopy[i].selected = !fightersCopy[i].selected;
              setFighters(fightersCopy);
            }}
          >
            <h3>{fighter.name}</h3>
          </button>
        ))}
      </div>
      <button
        style={classes.notSelected}
        onClick={() =>
          setFighters(
            fighters.map((fighter) => ({ ...fighter, selected: true }))
          )
        }
      >
        <h3> Select All</h3>
      </button>
      <button
        style={classes.notSelected}
        onClick={() =>
          setFighters(
            fighters.map((fighter) => ({ ...fighter, selected: false }))
          )
        }
      >
        <h3>Deselect All</h3>
      </button>
      <button
        style={classes.notSelected}
        onClick={() => {
          const choices = fighters.filter((fighter) => fighter.selected);
          if (!choices.length) return setSelectedFighter("");
          setSelectedFighter(
            choices[Math.floor(Math.random() * choices.length)].name
          );
        }}
      >
        <h3>Choose Character</h3>
      </button>
      <h1>{selectedFighter}</h1>
    </>
  );
}

export default App;
