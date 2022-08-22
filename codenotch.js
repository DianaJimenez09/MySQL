let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Petachis94.",
  database: "codenotch",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion correcta.");
  }
});

// let sql = "ALTER TABLE alumnos ADD profesion VARCHAR(60)";

// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Columna creada");
//     console.log(result);
//   }
// });

// let sql = "ALTER TABLE alumnos DROP COLUMN genero";

// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Columna borrada");
//     console.log(result);
//   }
// });

let sql = "DROP TABLE borrar_node";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Tabla borrada");
    console.log(result);
  }
});

// let sql = "INSERT INTO usuario (id_user, nombre, apellido, edad, id_dir) VALUES (1,\"Dani\", \"Linar Criti\", 30, 1)";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Dato Insertado");
//     console.log(result);
//   }
// });

// let sql = "UPDATE usuario SET edad = 40";
// connection.query(sql, function(err, result)
// {
//   if(err)
//   console.log(err);
//   else{
//     console.log('Dato Actualizado');
//     console.log(result);
//   }
// });

// let sql = "DELETE FROM borrar"; // eliminariamos todos los registros que tendríamos dentro de una tabla, no la tabla en sí.
// connection.query(sql, function(err, result)
// {
//   if(err)
//   console.log(err);
//   else{
//     console.log("Datos Borrados");
//   }
// });

// let sql = "SELECT nombre, apellido, edad FROM usuario"
// connection.query(sql, function (err, result)
// {
//   if(err)
//   console.log(err);
//   else
//   {
//     console.log('Selección realizada');
//     console.log(result);
//     console.log(result[0].nombre)
//     console.log(result[1].apellido)
//   }
// })

// let sql = "SELECT nombre FROM usuario WHERE edad >50";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Seleccion Realizada");
//     console.log(result);
//   }
// });
