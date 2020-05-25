import fitness from "./fitnessFunction";
import { mutationRate, sizeOfPopulation, object } from "../data";

function crossOver(parentA, parentB, sizeOfGene) {
  let half = Math.floor(sizeOfGene / 2);
  let firsthalf = parentA.slice(0, half);
  let secondhalf = parentB.slice(half, sizeOfGene);

  let childGene = [...firsthalf, ...secondhalf];
  let childFitness = fitness(childGene);

  let child = { gene: childGene, fitness: childFitness };
  return child;
}

function mutate(individual, sizeOfGene) {
  let { gene } = individual;
  const random = Math.floor(Math.random() * sizeOfGene);

  const newGene = gene.map((item, index) => {
    if (index === random) {
      return item === 1 ? 0 : 1;
    } else {
      return item;
    }
  });

  const newFitness = fitness(newGene);

  return { gene: newGene, fitness: newFitness };
}

function child(population) {
  let sizeOfGene = object.length;
  let top50 = Math.floor(sizeOfPopulation * 0.5);

  let { gene: parentA } = population[Math.floor(Math.random() * top50)];
  let { gene: parentB } = population[Math.floor(Math.random() * top50)];

  let prob = Math.floor(Math.random() * 100) + 1;

  let offspring = crossOver(parentA, parentB, sizeOfGene);

  if (prob <= mutationRate) {
    offspring = mutate(offspring, sizeOfGene);
  }
  return offspring;
}

export default child;
