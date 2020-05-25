import { object, maxWeight } from "../data";

function fitness(array) {
  let gene = array;
  let sizeOfGene = array.length;
  let totProfit = 0;
  let totWeight = 0;

  for (var i = 0; i < sizeOfGene; i++) {
    const [profit, weight] = object[i];
    totWeight += weight * gene[i];
    totProfit += profit * gene[i];
  }

  return totWeight > maxWeight ? 0 : totProfit;
}

export default fitness;
