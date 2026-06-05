for (let row = 1; row <= 3; row++){
    for (let column =1; column <= 4 ; column++){
console.log(`Row ${row}, Column ${column}`);

    }
}

const classroom = [
    ["Tola", "Anu", "Bola"],
    ["Chidi", "Ade", "Nneka"],
    ["Kofi", "Amma", "Yaw"]
]

for (let row = 0; row < classroom.length; row++){
    // console.log(classroom[row]);/
    

    for (let col = 0; col < classroom[row].length; col++){
        console.log(classroom[row][col]);
    }
}