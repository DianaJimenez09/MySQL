let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reto_2",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion correcta Reto2.");
  }
});

let sql = "SELECT AVG(mark) FROM marks WHERE subject_id=1";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato Grupo Insertado");
    console.log(result);
  }
});

let sql1 = "SELECT COUNT(*) FROM students";
connection.query(sql1, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato Grupo Insertado");
    console.log(result);
  }
});

let sql2 = "SELECT * FROM reto_2.group";
connection.query(sql2, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato Seleccionado");
    console.log(result);
  }
});

let sql3 = 'DELETE FROM reto_2.marks WHERE mark > 5 AND date < "2022-01-01"';
connection.query(sql3, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Eliminados");
    console.log(result);
  }
});

let sql4 = "ALTER TABLE students ADD inicio DATE";
connection.query(sql4, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Columna creada");
    console.log(result);
  }
});

let sql5 =
  "SELECT first_name, last_name FROM students WHERE inicio >= '2022-01-01';";
connection.query(sql5, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});

let sql6 =
  "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES ('5','2','4')";
connection.query(sql6, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});

let sql7 =
  "SELECT teacher_id, COUNT(*) subject_id FROM subject_teacher GROUP BY teacher_id;";
connection.query(sql7, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////RETO 2///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

let sql8 =
  "SELECT student_id, mark FROM reto_2.marks WHERE student_id>1 AND student_id <20 OR mark >8 AND date >'2020-12-31' AND date<'2022-01-01';";

connection.query(sql8, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});

let sql9 =
  "SELECT subject_id, AVG(mark) FROM marks WHERE date >'2021-12-31' GROUP BY subject_id";
connection.query(sql9, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});

let sql10 =
  "SELECT student_id, AVG(mark) FROM reto_2.marks WHERE date >'2021-12-31' GROUP BY student_id";
connection.query(sql10, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Datos Recopilados");
    console.log(result);
  }
});
