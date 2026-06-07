const students = [
  {
    name: "Oluwawole Timothy .T",
    course: "Software Engineering",
    id: "253091",
    image: "https://thumbs.dreamstime.com/b/passport-picture-laughing-african-businesswoman-isolated-white-background-cut-out-48244426.jpg"
  },
    {
    name: "Oluwawole Wonderful .T",
    course: "UI/UX Design",
    id: "253092",
    image: "https://www.shutterstock.com/image-photo/passport-photo-serious-young-adult-600nw-2317626543.jpg"
  },  {
    name: "Idowu-Agida Morenike .C",
    course: "Computer Science",
    id: "253093",
    image: "https://static.vecteezy.com/system/resources/thumbnails/055/125/958/small/close-up-portrait-of-african-teenager-with-defined-defined-braided-hairstyle-on-white-background-free-photo.jpg"
  },
  {
    name: "Adeniji Victor .O",
    course: "Cyber Security",
    id: "253094",
    image: "https://www.shutterstock.com/image-photo/passport-photo-real-young-woman-260nw-2274107825.jpg"
  },
  {
    name: "Sodunke Victoria .A",
    course: "Data Science",
    id: "253095",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTffFbkuk4lymkssDpXOa0AQsxOIAKN1S-DsMPgrL5zllXJPKBXiZZOGxw54HOzeMqBwTSg&s"
  },
  {
    name: "Sanni Rachael .O",
    course: "Graphics Design",
    id: "253096",
    image: "https://thumbs.dreamstime.com/b/beauty-woman-portrait-girl-beautiful-face-smiling-closeup-happy-perfect-smile-white-teeth-camera-attractive-healthy-76138194.jpg"
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