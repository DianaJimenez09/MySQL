let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Petachis94.",
  database: "reto_2",
});
connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion correcta Reto2.");
  }
});
//////////
//Reto 1//
//////////
let sql =
  "SELECT first_name,last_name, tittle FROM students JOIN marks ON (students.idstudents = marks.student_id) JOIN subjects ON(marks.subject_id = subjects.idsubjects)";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato alumnos Seleccionado");
    console.log(result);
  }
});

//////////
//RETO 2//
//////////
let sql2 =
  "SELECT first_name, last_name, tittle FROM teachers JOIN subject_teacher ON (teachers.idteachers = subject_teacher.teacher_id) JOIN subjects ON(subject_teacher.subject_id = subjects.idsubjects)";
connection.query(sql2, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato profes Seleccionado");
    console.log(result);
  }
});

////////
//RETO 3
////////

let sql3 =
  "SELECT first_name, last_name FROM teachers UNION SELECT tittle FROM subjects UNION SELECT COUNT(*) FROM students ";
connection.query(sql3, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Alumnos contados");
    console.log(result);
  }
});
//--> Corregir
