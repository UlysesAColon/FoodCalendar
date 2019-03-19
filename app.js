let cuisine = ["Chinese", "Italian", "American", "Mexican", "Indian", "Thai", "Burgers", "Southern", "Portuguese", "Puerto Rican", "Icelandic", "Jamaican", "French", "Spanish"];
let chosenCuisine =[];
let otherchosen = [];


for (let i = 0; i < 5 ; i++) {
    let number = Math.floor(Math.random() * cuisine.length )
    chosenCuisine = cuisine.slice(number, number + 1)
    console.log(chosenCuisine);
    console.log(chosenCuisine.toString());
    otherchosen.push(chosenCuisine.toString());
    otherchosen.toString();
}

console.log(otherchosen);   
