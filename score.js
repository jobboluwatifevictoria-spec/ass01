let nameOfAnimal = "lion";//Global Scope
let nameOfSchool = " ";

localScope();

console.log(nameOfSchool);


function localScope() {
  let nameOfPerson = "Sekina";//Local Scope  

  nameOfSchool= "Funaab"
console.log(nameOfSchool);


  console.log(nameOfPerson);
  console.log(nameOfAnimal);
}

// console.log(nameOfPerson)


console.log(nameOfAnimal);
console.log(nameOfSchool);


