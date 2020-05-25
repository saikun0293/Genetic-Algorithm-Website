import React, { useState } from "react";
import createPopulation from "./createPopulation";
import selection from "./selection";
import { sizeOfPopulation, mutationRate,maxWeight } from "../data";
//import InputBox from "./Input";

function App() {
  const [population, setPopulation] = useState(createPopulation());
  const [generationCount, setGenerationCount] = useState(0);

  function nextGeneration() {
    let sortedPopulation = population.sort((a, b) => -(a.fitness - b.fitness));
    setPopulation(selection(sortedPopulation));
    setGenerationCount(generationCount + 1);
  }

  return (
    <div className="webPage">
      <div className="set-container">
        {population.map(individual => {
          return <p className="gene">{individual.gene.toString().replace (/,/g, "  ")}</p>;
        })}
      </div>
      <div className="details">
        <p>Generation Count :: {generationCount}</p>
        <p>Population Size:: {sizeOfPopulation}</p>
        <p>Mutation Rate :: {mutationRate}</p>
        <p>Max Weight :: {maxWeight}</p>
        <button  type="button" class="next" onClick={nextGeneration}>NextGeneration</button>
      </div>
    </div>
  );
}

export default App;
