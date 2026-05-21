
function enter(){
    let age = document.getElementById("age").value;
   if (age =="") {
    alert("fill the Input pls😔");
   }else if (age >= 18){
        alert("you are qualified to own a car🎉🎉🎉");
    } else {
        alert("Sorry😔, You are not qualified to own a car");
    } 
}