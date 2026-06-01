function submitMark(event)
{
    //Prevent page reload
    event.preventDefault(); 

    //Fetch input values
    let studentName = document.getElementById("student-name").value;
    let studentMark = document.getElementById("student-mark").value;
    let noResults = document.getElementById("no-results");
    noResults.innerHTML = "";
    //Parse student mark
    studentMark = parseInt(studentMark);

    //Validate input
    if(!studentName)
    {
        alert("Student name is required");
        return;
    }
    if(!studentMark || studentMark < 0 || studentMark > 100)
    {
        alert("Invalid mark entered");
        return;
    }
    let result = "FAIL";
    let grade = "fail";
    const student_data = {
        name: studentName,
        mark: studentMark
    };

    //Fetch students from localstorate
    let students = JSON.parse(localStorage.getItem("students"));
    if(!students)
    {
        students = [];
    }
    students.push(student_data);

    //Append table field
    const table = document.getElementById("student-results");


    const row = document.createElement("li");
        //Check mark and determine grade
    if(studentMark> 0 && studentMark<= 49)
    {
        result = "FAIL";
        grade = "Fail";
    }
    else if(studentMark>= 50 && studentMark<= 64)
    {
        result = "PASS";
        grade = "Pass";
    }
    else if(studentMark>= 65 && studentMark<= 79)
    {
        result = "PASS";
        grade = "Merit";
    }
    else if(studentMark>= 80 && studentMark<= 100)
    {
        result = "PASS";
        grade = "Distinction";
    }
    row.innerHTML = `<span>${studentName}</span><span>${studentMark}</span><span>${result}</span><span>${grade}</span>`;
    table.appendChild(row);
    students = JSON.stringify(students);
    
    localStorage.setItem("students",students);
    
    console.log(`The student name is ${studentName} and the student mark is ${studentMark} and the result is ${result} - ${grade}`);
}
function loadStudents()
{
    let students = JSON.parse(localStorage.getItem("students"));
    if(students)
    {
        
        //Append table field
        const table = document.getElementById("student-results");

        students.forEach(student => {
        const row = document.createElement("li");
        let result = "FAIL";
        let grade = "fail";
            console.log(student);
        //Check mark and determine grade
        if(student.mark > 0 && student.mark <= 49)
        {
            result = "FAIL";
            grade = "Fail";
        }
        else if(student.mark >= 50 && student.mark <= 64)
        {
            result = "PASS";
            grade = "Pass";
        }
        else if(student.mark >= 65 && student.mark <= 79)
        {
            result = "PASS";
            grade = "Merit";
        }
        else if(student.mark >= 80 && student.mark <= 100)
        {
            result = "PASS";
            grade = "Distinction";
        }
        row.innerHTML = `<span>${student.name}</span><span>${student.mark}</span><span>${result}</span><span>${grade}</span>`;
        table.appendChild(row);
        });
    }
    if(!students)
    {
        let noResults = document.getElementById("no-results");
        noResults.innerHTML = "No results available as yet";
    }
}
//Load students on page load
window.onload = loadStudents;