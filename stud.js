let studentRecords = [];

        function getGrade(avg) {
            if (avg >= 70) {
                return "A";
            } else if (avg >= 60) {
                return "B";
            } else if (avg >= 50) {
                return "C";
            } else if (avg >= 40) {
                return "D";
            } else {
                return "F";
            }
        }

        function getStatus(avg) {
            if (avg >= 80) {
                return "BRAVO";
            } else if (avg >= 50) {
                return "PASS";
            } else {
                return "FAIL";
            }
        }

        function displayRecords() {

            let tableContent = "";

            for (let i = 0; i < studentRecords.length; i++) {

                tableContent += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${studentRecords[i].name}</td>
                        <td>${studentRecords[i].total}</td>
                        <td>${studentRecords[i].average}</td>
                        <td>${studentRecords[i].grade}</td>
                        <td>${studentRecords[i].status}</td>
                    </tr>
                `;
            }

            document.getElementById("tableBody").innerHTML = tableContent;

            document.getElementById("studentCount").innerText =
                studentRecords.length;
            }
           let studentName =
    document.getElementById("studentName").value.trim();

    
    function analyzeResult() {
        
        let studentName =
        document.getElementById("studentName").value;
        
        let score1 =
        Number(document.getElementById("English").value);
        
        let score2 =
        Number(document.getElementById("Math").value);
        
        let score3 =
        Number(document.getElementById("Science").value);
        
        let score4 =
        Number(document.getElementById("History").value);
        
            let score5 =
            Number(document.getElementById("Geography").value);
            
            if (studentName === "") {
                alert("Student name cannot be empty!");
            return ( document.getElementById("studentName").value = "",

                document.getElementById("English").value = "",

                document.getElementById("Math").value = "",

                document.getElementById("Science").value = "",

                document.getElementById("History").value = "",

                document.getElementById("Geography").value = "");
            
            } ;
            
            let totalScore =
            score1 + score2 + score3 + score4 + score5;

            let averageScore = totalScore / 5;

            let grade = getGrade(averageScore);

            let status = getStatus(averageScore);

            let studentRecord = {
                name: studentName.toUpperCase(),
                total: totalScore,
                average: averageScore.toFixed(2),
                grade: grade,
                status: status
            };

            studentRecords.push(studentRecord);

            alert("Student record added successfully!");

            document.getElementById("result").innerHTML = `
                <h3>Result Analysis</h3>
                <p><strong>S/N:</strong> ${studentRecords.length}</p>
                <p><strong>Name:</strong> ${studentName.toUpperCase()}</p>
                <p><strong>Total Score:</strong> ${totalScore}</p>
                <p><strong>Average Score:</strong> ${averageScore.toFixed(2)}</p>
                <p><strong>Grade:</strong> ${grade}</p>
                <p><strong>Status:</strong> ${status}</p>
            `;

            displayRecords();


                document.getElementById("studentName").value = "";

                document.getElementById("English").value = "";

                document.getElementById("Math").value = "";

                document.getElementById("Science").value = "";

                document.getElementById("History").value = "";

                document.getElementById("Geography").value = "";

        }