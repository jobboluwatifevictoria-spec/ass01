let data = []
console.log(data);

let arr = new Array
console.log(arr);

const fruits = ['banana','mango','pawpaw','cherry','strawberry']
console.log(fruits[fruits.length - 1]);

const countries = ['Nigeria', 'Canada','Togo','Brazile','London','Kenya','Germany','India','Japan','Ireland']
console.log(countries[0]);

countries.reverse()
console.log(countries);


countries[0] = 'Hungary'
console.log(countries);

const threeValues = Array(3).fill('V')
console.log(threeValues);


const fruitss=['banana','orange','mango','lemon']

fruitss.push('apple')
console.log(fruitss);
const vegetables=['carrot','broccoli','spinach','cabbage','tomato']
const fruitsAndVegetables= fruitss.concat(vegetables)

console.log(fruitsAndVegetables);



console.log(Array.isArray(fruitss[0]));
console.log(fruits.includes('banana'));

console.log(fruits.toString());

console.log(fruits.join(" "));

console.log(fruits.slice());
console.log(fruits.slice(0));

console.log(fruitss.slice(0, 2));

console.log(fruitss);

let recentlyDeleted = fruitss.splice(0, 1);
console.log(recentlyDeleted);

console.log(fruitss);

fruitss.pop();
console.log(fruitss);

fruitss.reverse()
console.log(fruitss);

let mixedArray = [1,'apple', 2,'banana', 3,'tomato', 4, 5]
mixedArray.sort()
console.log(mixedArray);


let list = []

function show(){
    let inn = document.getElementById("inn").value;
    console.log(inn);
    list.push(inn)
    console.log(list);
    
   result.innerHTML= ""

    for(let index =0; index < list.length;index++){
        console.log(list[index]);

        result.innerHTML+= `
        <p>${list[index]}<p/>`

        document.getElementById("inn").value= ""
    }
}
 
