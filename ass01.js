let ans=[
 January= "31",
  February= "28" ,
 March= "31" ,
  April= "30",
  May= "31" ,
 June= "30",
 July= "31",
 August= "31",
 September= "30",
  October= "31",
  November= "30",
  December= "31",
];
document.getElementById("btn").addEventListener("click", function() {
    let ans = document.getElementById("ans").value ;
    let input = prompt("How many days are in the month of " + ans + "?");
    if (ans == "") {
        alert("Please input your answer");
}else if (input == January || input == February || input == March || input == April || input == May || input == June || input == July || input == August || input == September || input == October || input == November || input == December) {
        alert("Correct Answer");
        console.log(ans,input);
        
    } else{
        alert("Wrong Answer");
    }
});
