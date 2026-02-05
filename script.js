let flavorsInput = prompt("Enter the Froyo flavors you would like to order");
let flavors = [];
if (flavorsInput) {
  flavors = flavorsInput.split(",");
}

console.log(flavors);

function takeOrder(order) {
  let flavorObject = {};

  for (let i = 0; i < order.length; i++) {
    const flavorTemp = order[i];
    if (flavorTemp in flavorObject) {
      flavorObject[flavorTemp] += 1;
    } else {
      flavorObject[flavorTemp] = 1;
      console.log(flavorTemp);
    }
  }
  console.table(flavorObject);
}

takeOrder(flavors);
