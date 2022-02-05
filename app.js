function pandaCost(shingaraQuantity, samuchaQuantity, JilapiQuantity) {
  const shingara = 7;
  const samucha = 12;
  const Jilapi = 15;
  //// product quantity calculation is here
  const myShingaraQuantity = shingara * shingaraQuantity;
  const mySamuchaQuantity = samucha * samuchaQuantity;
  const myJilapiQuantity = Jilapi * JilapiQuantity;
  // total  Recipe  quantity is here
  const finalAmount = myShingaraQuantity + mySamuchaQuantity + myJilapiQuantity;

  return finalAmount;
}

const result = pandaCost(3, 7, 9);
console.log("Total :", result);
