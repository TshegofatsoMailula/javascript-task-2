function submitMark(event)
{
    //Prevent page reload
    event.preventDefault(); 

    //Fetch input values
    let studentName = document.getElementById("student-name").value;
    let studentMark = document.getElementById("student-mark").value;
    
    //Parse student mark
    studentMark = parseInt(studentMark);
    let result = "FAIL";
    let grade = "fail";
    const student = {
        name: studentName,
        mark: studentMark
    };
    //Fetch and store students from localstorate
    let students = JSON.parse(localStorage.getItem("students"));
    if(!students)
    {
        students = [];
    }
    students.push(student);
    students = JSON.stringify(students);
    localStorage.setItem("students",students);

    //Validate input
    if(!studentName)
    {
        alert("Student name is required");
    }
    if(!studentMark || studentMark < 0 || student > 100)
    {
        alert("Invalid mark entered");
    }

    //Check mark and determine grade
    if(studentMark > 0 && studentMark <= 49)
    {
        result = "FAIL";
        grade = "Fail";
    }
    else if(studentMark >= 50 && studentMark <= 64)
    {
        result = "PASS";
        grade = "Pass";
    }
    else if(studentMark >= 65 && studentMark <= 79)
    {
        result = "PASS";
        grade = "Merit";
    }
    else if(studentMark >= 80 && studentMark <= 100)
    {
        result = "PASS";
        grade = "Distinction";
    }
    console.log(`The student name is ${studentName} and the student mark is ${studentMark} and the result is ${result} - ${grade}`);
    console.log(`The database is ${students}`);
}