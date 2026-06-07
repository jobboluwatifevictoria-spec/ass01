const students = [
  {
    name: "Oluwawole Timothy .T",
    course: "Software Engineering",
    id: "253091",
    image: "./IMG/tes.jpeg"
  },
    {
    name: "Oluwawole Wonderful .T",
    course: "UI/UX Design",
    id: "253092",
    image: "./IMG/wonder.jpeg"
  },  {
    name: "Idowu-Agida Morenike .C",
    course: "Computer Science",
    id: "253093",
    image: "./IMG/morey.jpeg"
  },
  {
    name: "Adeniji Victor .O",
    course: "Cyber Security",
    id: "253094",
    image: "./IMG/vic.jpeg"
  },
  {
    name: "Sodunke Victoria .A",
    course: "Data Science",
    id: "253095",
    image: "./IMG/vick.jpeg"
  },
  {
    name: "Sanni Rachael .O",
    course: "Graphics Design",
    id: "253096",
    image: "./IMG/rach.jpeg"
  }
];

let currentIndex = 0;

function displayStudent() {
  document.getElementById("studentName").textContent =
    students[currentIndex].name;

  document.getElementById("course").textContent =
    students[currentIndex].course;

  document.getElementById("studentId").textContent =
    students[currentIndex].id;

  document.getElementById("studentImage").src =
    students[currentIndex].image;
}

function nextStudent() {
  currentIndex++;

  if (currentIndex >= students.length) {
    currentIndex = 0;
  }

  displayStudent();
}

function previousStudent() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = students.length - 1;
  }

  displayStudent();
}