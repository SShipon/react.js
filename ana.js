
function anaToVori(ana) {
  // Error handle
  if (typeof ana == "number" && ana >= 0) {
    //   calculation
    return (ana / 16).toFixed(2);
  } else {
    return "Please inter positive number";
  }
}

var result = anaToVori(13);
console.log(result);


//2.number -

function pandaCost(singaraQuantity, samuchaQuantity, jilapyQuantity) {
  // Error Handle
  if (
    typeof singaraQuantity == "number" &&
    typeof samuchaQuantity == "number" &&
    typeof jilapyQuantity == "number" &&
    singaraQuantity >= 0 &&
    samuchaQuantity >= 0 &&
    jilapyQuantity >= 0
  ) {
    let singaraPrice = 7;
    let samuchaPrice = 10;
    let jilapyPrice = 15;
    let totalPrice = 0;

    // Price calculation
    let updatedsingaraPrices = singaraPrice * singaraQuantity;
    let updatedsamuchaPrices = samuchaPrice * samuchaQuantity;
    let updatedjilapyPrices = jilapyPrice * jilapyQuantity;
    totalPrice =
      updatedsingaraPrices + updatedsamuchaPrices + updatedjilapyPrices;
    return totalPrice;
  } else {
    return "Please enter positive number";
  }
}

const result = pandaCost(2, 2, 2);
console.log(result);