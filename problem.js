
function picnicBudget(peoples) {
  const first100PersonsPicnicCost = 5000;
  const second100PersonsPicnicCost = 4000;
  const over200PersonsPicnicCost = 3000;

  if (typeof peoples == "number" && peoples >= 0) {
    // First 100 peoples calculation
    if (peoples <= 100) {
      const cost = peoples * first100PersonsPicnicCost;
      return cost;
    }
    // Second 100 peoples calculation
    else if (peoples <= 200) {
      const first100PersonsCost = 100 * first100PersonsPicnicCost;
      const restPeoples = peoples - 100;
      const second100PersonsCost = restPeoples * second100PersonsPicnicCost;
      const totalCost = first100PersonsCost + second100PersonsCost;
      return totalCost;
    }
    // over 200 peoples calculation
    else {
      const first100PersonsCost = 100 * first100PersonsPicnicCost;
      const second100PersonsCost = 100 * second100PersonsPicnicCost;
      const restPeoples = peoples - 200;
      const RestDenseAnimals = restPeoples * over200PersonsPicnicCost;
      const totalCost =
        first100PersonsCost + second100PersonsCost + RestDenseAnimals;
      return totalCost;
    }
  } else {
    return "Please enter positive number";
  }
}

const result = picnicBudget(220);
console.log(result);

