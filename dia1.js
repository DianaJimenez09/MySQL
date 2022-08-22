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

// let sql =
//   'INSERT INTO students (idstudents, first_name, last_name,group_id ) VALUES (2,"José Luis", "Zapatero", 1)';
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Dato Grupo Insertado");
//     console.log(result);
//   }
// });

// let sql = 'INSERT INTO students VALUES (3,"Mariano", "Rajoy", 1)';
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Dato Grupo Insertado");
//     console.log(result);
//   }
// });

// let sql = "UPDATE marks SET mark = 0";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Nota Actualizada");
//     console.log(result);
//   }
// });

// let sql = "SELECT first_name, last_name FROM students";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Seleccion nombre y apellido Realizada");
//     console.log(result);
//   }
// });

// let sql = "SELECT * FROM teachers";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Datos profesores");
//     console.log(result);
//   }
// });

// let sql = 'DELETE FROM marks WHERE date < "2012-08-08"';
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Datos Borrados");
//   }
// });

let sql = "UPDATE marks SET mark=5 WHERE mark < 5";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Nota Actualizada");
    console.log(result);
  }
});
