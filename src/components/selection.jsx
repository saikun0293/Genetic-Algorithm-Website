import child from "./createOffspring";
import { sizeOfPopulation } from "../data";

function selection(population, objects) {
  let newPopulation = [];
  let top10 = Math.floor(sizeOfPopulation * 0.1);

  for (var i = 0; i < top10; i++) {
    newPopulation.push(population[i]);
  }

  for (var j = top10; j < sizeOfPopulation; j++) {
    let offspring = child(population);
    newPopulation.push(offspring);
  }

  return newPopulation;
}

export default selection;
