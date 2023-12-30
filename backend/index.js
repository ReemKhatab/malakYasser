import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); //ashan a3raf a3ml post mn postman

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
// app.get("/users", (request, response) => {
//   const q = "SELECT * FROM USERS";
//   db.query(q, (error, data) => {
//     if (error) return response.json(error);
//     return response.json(data);
//   });
// });
// app.get("/teams", (request, response) => {
//   const q = "SELECT * FROM TEAMS";
//   db.query(q, (error, data) => {
//     if (error) return response.json(error);
//     return response.json(data);
//   });
// });
// app.get("/stadiums", (request, response) => {
//   const q = "SELECT * FROM STADIUMS";
//   db.query(q, (error, data) => {
//     if (error) return response.json(error);
//     return response.json(data);
//   });
// });
// app.get("/matches", (request, response) => {
//   const q = "SELECT * FROM MATCHES";
//   db.query(q, (error, data) => {
//     if (error) return response.json(error);
//     return response.json(data);
//   });
// });
// app.get("/seats", (request, response) => {
//   const q = "SELECT * FROM SEATS";
//   db.query(q, (error, data) => {
//     if (error) return response.json(error);
//     return response.json(data);
//   });
// });
app.get("/users", (request, response) => {
  const q = "SELECT ROLE FROM USERS WHERE USERNAME=? AND PASSWORD=?";
  const username = request.query.username;
  const password = request.query.password;
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, [username, password], (error, result) => {
    if (error) return response.json(error);
    if (result.length > 0) {
      return response.json(result[0]); // Assuming you only want to send the first result
    } else {
      return response
        .status(401)
        .json({ error: "Invalid username or password" });
    }
  });
});

app.get("/siteadministrator/managers", (request, response) => {
  const q = "SELECT username,activated FROM USERS WHERE ROLE=1 OR ROLE=2";
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, (error, result) => {
    if (error) return response.json(error);
    return response.json(result);
  });
});
app.get("/siteadministrator/customers", (request, response) => {
  const q = "SELECT username,activated FROM USERS WHERE ROLE=3";
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, (error, result) => {
    if (error) return response.json(error);
    return response.json(result);
  });
});

app.delete("/siteadministrator/deleteuser", (request, response) => {
  const q = "DELETE FROM USERS WHERE username = ?";
  const username = request.body.selecteduser;
  console.log("user to deleteeeeee: ", username);
  console.log("received a delete request: " + request.url);
  db.query(q, [username], (error, result) => {
    if (error) return response.json(error);
    else {
      return response.json(result);
    }
  });
});

app.put("/siteadministrator/updateActivateUser", (request, response) => {
  const q = "UPDATE USERS SET activated=? WHERE username = ?";
  const username = request.body[0];
  const activated = request.body[1];
  console.log("user to update: ", activated, username);
  console.log("received an update request: " + request.url);
  db.query(q, [activated, username], (error, result) => {
    if (error) return response.json(error);
    else {
      return response.json(result);
    }
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
