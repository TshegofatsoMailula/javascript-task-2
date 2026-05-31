function submitMark(event)
{
    event.preventDefault(); 
    let studentName = document.getElementById("student-name").value;
    let studentMark = document.getElementById("student-mark").value;
    studentMark = parseInt(studentMark);
    let result = "FAIL";
    let grade = "fail";
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
}