import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());//ashan a3raf a3ml post mn postman
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlpassword8",
  database: "projconsultation",
});
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
//used this line with db
app.get("/", (request, response) => {
  response.json("hello");
});
app.get("/users", (request, response) => {
  const q = "SELECT * FROM USERS";
  db.query(q, (error, data) => {
    if (error) return response.json(error);
    return response.json(data);
  });
});
app.get("/teams", (request, response) => {
  const q = "SELECT * FROM TEAMS";
  db.query(q, (error, data) => {
    if (error) return response.json(error);
    return response.json(data);
  });
});
app.get("/stadiums", (request, response) => {
  const q = "SELECT * FROM STADIUMS";
  db.query(q, (error, data) => {
    if (error) return response.json(error);
    return response.json(data);
  });
});
app.get("/matches", (request, response) => {
  const q = "SELECT * FROM MATCHES";
  db.query(q, (error, data) => {
    if (error) return response.json(error);
    return response.json(data);
  });
});
app.get("/seats", (request, response) => {
  const q = "SELECT * FROM SEATS";
  db.query(q, (error, data) => {
    if (error) return response.json(error);
    return response.json(data);
  });
});
app.listen(8808, () => {
  console.log("connectedd bnjjnjnjbbb");
});


//commands

//npm init -y 
//npm i express mysql nodemon
//npm i axios f el client side: da ashan react y2dar yt3amel m3a el requests w db

// axios : 131 vulnerabilities (1 low, 104 moderate, 22 high, 4 critical)?????????

//to run node index.js or npm start