function aveScore() {
    let userName = document.getElementById("name").value;

    let maths = Number(document.getElementById("maths").value);
    let eng = Number(document.getElementById("eng").value);
    let bio = Number(document.getElementById("bio").value);
    let chem = Number(document.getElementById("chem").value);

    if (userName == "" || maths == "" || eng == "" || bio == "" || chem == "") {
        alert("Please fill all fields");
        return;
    }


    let total = maths + eng + bio + chem;

    let average = total / 4;

    let grade = "";

    if (average >= 70) {
        grade = "A- Bravo ✔";
    }else if (average >= 60) {
        grade = "B-Very.Good👌";
    }else if (average >= 50) {
        grade = "C-good 😶😏";
    }else if (average >= 45) {
        grade = "D-poor😒";
    }else if (average >= 40) {
        grade = "E-Poorer, 😢";
    }else {
        grade = "F-Fail 🤦‍♂️";
    }

    let result = document.getElementById("result");

    result.innerHTML += `
        <tr>
            <td>${userName}</td>
            <td>${total}</td>
            <td>${average}</td>
            <td>${grade}</td>
        </tr>
    `;
}