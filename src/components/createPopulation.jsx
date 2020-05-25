import fitness from "./fitnessFunction";
import { sizeOfPopulation, object } from "../data";

function population() {
  let sizeOfGene = object.length;
  let population = [];

  function createGene() {
    let geneArray = [];
    for (var i = 0; i < sizeOfGene; i++) {
      geneArray.push(Math.floor(Math.random() * 2));
    }

    let fitnessCalc = fitness(geneArray);
    population.push({ gene: geneArray, fitness: fitnessCalc });
  }

  for (var i = 0; i < sizeOfPopulation; i++) {
    createGene();
  }

  return population;
}

export default population;
