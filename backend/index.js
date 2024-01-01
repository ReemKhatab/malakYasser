import express, { json } from "express";
import mysql from "mysql2";
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
db.connect((err) => {
  if (err) {
    console.log(err);
  }
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
  const q =
    "SELECT ROLE FROM USERS WHERE USERNAME=? AND PASSWORD=? AND ACTIVATED=1";
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
  const q = "SELECT username,activated FROM USERS ROLE=2";
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
app.post("/users", (request, response) => {
  const q =
    "INSERT INTO projconsultation.users " +
    "VALUES (? , ? , ? , ? , ? , ? , ? , ? , ? , ?,?)";
  const username = request.body.username;
  const password = request.body.password;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const birthDate = request.body.birthDate;
  const address = request.body.address;
  const city = request.body.city;
  const email = request.body.email;
  const gender = request.body.gender;

  console.log("VALUESSS", request.body, request.query.password);

  db.query(
    q,
    [
      username,
      password,
      email,
      firstName,
      lastName,
      birthDate,
      gender,
      city,
      address,
      3,
      0,
    ],
    (error, result) => {
      if (error) console.log(error);
      // if (result.length > 0) {
      //   return response.json(result[0]); // Assuming you only want to send the first result
      // } else {
      //   return response
      //     .status(401)
      //     .json({ error: "Invalid username or password" });
      // }
    }
  );
});
app.get("/edit", (request, response) => {
  const q = "SELECT * FROM USERS WHERE USERNAME=?";
  const username = request.query.username;
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, [username], (error, result) => {
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
app.post("/edit", (request, response) => {
  const q =
    "UPDATE projconsultation.users SET password=?, email=?,firstname=?,lastname=?,birthdate=?,city=?,address=? where username=?";
  const username = request.body.username;
  const password = request.body.password;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const birthDate = request.body.birthDate;
  const address = request.body.address;
  const city = request.body.city;
  const email = request.body.email;
  const gender = request.body.gender;

  console.log("VALUESSS", request.body, request.query.password);

  db.query(
    q,
    [password, email, firstName, lastName, birthDate, city, address, username],
    (error, result) => {
      if (error) console.log(error);
      console.log(result);
      // if (result.length > 0) {
      //   return response.json(result[0]); // Assuming you only want to send the first result
      // } else {
      //   return response
      //     .status(401)
      //     .json({ error: "Invalid username or password" });
      // }
    }
  );
});

app.get("/EFA_manager/create_new_match/get_all_teams", (request, response) => {
  const q = "SELECT * FROM TEAMS";
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, (error, result) => {
    if (error) return response.json(error);
    return response.json(result);
  });
});

app.get(
  "/EFA_manager/create_new_match/get_all_stadiums",
  (request, response) => {
    const q = "SELECT * FROM STADIUMS";
    // console.log("VALUESSS", request.query.username, request.query.password);
    console.log("received a request: " + request.url);
    db.query(q, (error, result) => {
      if (error) return response.json(error);
      return response.json(result);
    });
  }
);

app.get(
  "/EFA_manager/create_new_match/get_stadiums_capacity",
  (request, response) => {
    const q = "SELECT numberofseats FROM STADIUMS WHERE STADIUMNAME=?";
    const stadiumname = request.query.stadiumname;
    console.log("VALUESSS", request.query.stadiumname);
    console.log("received a request: " + request.url);
    db.query(q, [stadiumname], (error, result) => {
      if (error) return response.json(error);
      // if (result.length > 0) {
      console.log("VALUESSS", result[0]);
      return response.json(result[0]);
      // } else {
      //   return response.status(401).json({ error: "Number of seats is null" });
      // }
    });
  }
);

app.post("/EFA_manager/create_new_match/submit_match", (request, response) => {
  const q =
    "INSERT INTO `projconsultation`.`matches` (`hometeam`, `awayteam`, `matchdate`, `matchtime`, `stadiumname`, `refree`, `lineman1`, `lineman2`, `totalcapacity`, `vacantseats`, `reservedseats`) VALUES (?, ?,?,?, ?,?, ?, ?,?,?,?)";

  const selectQuery = "SELECT LAST_INSERT_ID() AS insertedId";

  const hometeam = request.body.hometeam;
  const awayteam = request.body.awayteam;
  const matchdate = request.body.matchdate;
  const matchtime = request.body.matchtime;
  const stadiumname = request.body.stadiumname;
  const refree = request.body.refree;
  const lineman1 = request.body.lineman1;
  const lineman2 = request.body.lineman2;
  const totalcapacity = request.body.totalcapacity;
  const vacantseats = request.body.vacantseats;
  const reservedseats = request.body.reservedseats;

  console.log("VALUESSS MATCHHH", request.body);

  db.query(
    q,
    [
      hometeam,
      awayteam,
      matchdate,
      matchtime,
      stadiumname,
      refree,
      lineman1,
      lineman2,
      totalcapacity,
      vacantseats,
      reservedseats,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
        return response.status(401).json({ error: "Invalid inputttttttttt" });
      }
      // if (result.length > 0) {
      console.log("LENGTH", result.length);
      // return response.json(result);
      db.query(selectQuery, (selectError, results) => {
        if (selectError) {
          console.log(selectError);
          return response
            .status(401)
            .json({ error: "Error retrieving inserted ID" });
        }
        const insertedId = results[0].insertedId;
        console.log("Inserted ID:", insertedId);
        return response.json({ insertedId });
      });
    }
  );
});

app.post("/EFA_manager/create_new_match/add_seat", (request, response) => {
  const q =
    "INSERT INTO `projconsultation`.`seats` (`matchid`, `seatid`, `reserved`) VALUES (?, ?,?)";
  const matchid = request.body.matchid;
  const seatid = request.body.seatid;
  const reserved = 0;
  console.log("VALUESSS SEATT", request.body);
  db.query(q, [matchid, seatid, reserved], (error, result) => {
    if (error) {
      console.log(error);
      return response.status(401).json({ error: "Can't insert seats" });
    }
    return response.json(result);
  });
});

app.put("/EFA_manager/create_new_match/edit_match", (request, response) => {
  const q =
    "UPDATE `projconsultation`.`matches` SET `hometeam`=?, `awayteam`=?, `matchdate`=?, `matchtime`=?,stadiumname=?, `refree`=?, `lineman1`=?, `lineman2`=?, `totalcapacity`=? ,`vacantseats`=? ,`reservedseats`=? WHERE id=?";
  const id = request.body.id;
  const hometeam = request.body.hometeam;
  const awayteam = request.body.awayteam;
  const matchdate = request.body.matchdate;
  const matchtime = request.body.matchtime;
  const stadiumname = request.body.stadiumname;
  const refree = request.body.refree;
  const lineman1 = request.body.lineman1;
  const lineman2 = request.body.lineman2;
  const totalcapacity = request.body.totalcapacity;
  const vacantseats = request.body.vacantseats;
  const reservedseats = request.body.reservedseats;

  console.log("VALUESSS iDDDDD", request.body.id);

  db.query(
    q,
    [
      hometeam,
      awayteam,
      matchdate,
      matchtime,
      stadiumname,
      refree,
      lineman1,
      lineman2,
      totalcapacity,
      vacantseats,
      reservedseats,
      id,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
        return response.status(401).json({ error: "Invalid inputttttttttt" });
      }
      // if (result.length > 0) {
      console.log("LENGTH", result.length);
      return response.json(result);
      // } else {
      //   return response
      //     .status(401)
      //     .json({ error: "Invalid inputttttttttt" });
      // }
    }
  );
});

app.post("/EFA_manager/add_stadium", (request, response) => {
  const q =
    "INSERT INTO projconsultation.stadiums " + "VALUES (? , ? , ? , ? )";
  const stadiumname = request.body.stadiumname;
  const numberofseats = request.body.numberofseats;
  const rows = request.body.rows;
  const columns = request.body.columns;
  console.log("VALUESSS", request.body, request.query.password);
  db.query(q, [stadiumname, numberofseats, rows, columns], (error, result) => {
    if (error) {
      return response.status(401).json({ error: "duplicate" });
    }
  });
});

/////////////////////////////////////////////////seatsssssssssssssssssssssss
app.get("/match", (request, response) => {
  const q = "SELECT * FROM matches where id=?;";
  const matchid = request.query.matchid;
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, [matchid], (error, result) => {
    if (error) return response.json(error);
    if (result.length > 0) {
      return response.json(result[0]); // Assuming you only want to send the first result
    }
  });
});
////////////////////////////////////////get stadium rows and coloumns///////////
app.get("/stadium", (request, response) => {
  const q = "SELECT * FROM stadiums where stadiumname=?";
  const stadiumname = request.query.stadiumname;
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, [stadiumname], (error, result) => {
    if (error) return response.json(error);
    if (result.length > 0) {
      return response.json(result[0]); // Assuming you only want to send the first result
    }
  });
});
////////////////////////////////////////get seatssssssssssssssssss///////////
app.get("/seats", (request, response) => {
  const q = "SELECT * FROM seats where matchid=?";
  const matchid = request.query.matchid;
  // console.log("VALUESSS", request.query.username, request.query.password);
  console.log("received a request: " + request.url);
  db.query(q, [matchid], (error, result) => {
    if (error) return response.json(error);
    if (result.length > 0) {
      return response.json(result); // Assuming you only want to send the first result
    }
  });
});

app.get("/view_matches", (request, response) => {
  const q =
    "SELECT * FROM projconsultation.matches WHERE DATE(matchdate) >= CURDATE()";
  console.log("received a request: " + request.url);
  db.query(q, (error, result) => {
    if (error) return response.json(error);
    return response.json(result);
  });
});
/////////////////////////////////checkouttt///////////////////////

app.post("/checkout", (request, response) => {
  const q =
    "update seats set reserved=? , username=? where matchid=? && seatid=?";
  const reserved = request.body.reserved;
  const matchid = request.body.matchid;
  const seatid = request.body.seatid;
  const username = request.body.username;
  console.log("checkkout", request.body);
  db.query(q, [reserved, username, matchid, seatid], (error, result) => {
    if (error) {
      return response.status(401).json({ error: "duplicate" });
    }
    console.log(result);
  });
});
//E3MLO RETRIEVE LEL SEAT ID BY ORDER
app.get("/tickets", (request, response) => {
  const q =
    "SELECT matches.id, matches.hometeam, matches.awayteam, seats.seatid , matches.matchdate, matches.matchtime ,seats.ticketid " +
    "FROM matches INNER JOIN seats ON matches.id = seats.matchid where seats.username = ?";
  const username = request.query.username;
  console.log("received a tickettttttttt: " + request.url);
  db.query(q, [username], (error, result) => {
    if (error) return response.json(error);
    console.log(result);
    return response.json(result);
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
