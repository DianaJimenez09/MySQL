let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "new_prueba",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion correcta.");
  }
});

// let sql =
//   "CREATE TABLE direccion (id_dir INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(200), numero INT, ciudad VARCHAR(60))";

// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Tabla creada");
//     console.log(result);
//   }
// });

// let sql =
//   "CREATE TABLE usuario (id_user INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(70), apellido VARCHAR(250), edad INT)";

// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Tabla creada");
//     console.log(result);
//   }
// });

// let sql = "DROP TABLE direccion";
// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Tabla borrada");
//     console.log(result);
//   }
// });

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

let sql = "SELECT nombre FROM usuario WHERE edad >50";
connection.query(sql, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Seleccion Realizada");
    console.log(result);
  }
});
