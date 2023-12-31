// export const Teams = [
//   {
//     teamname: "Ahly",
//     logo: "/logos/Alahly.png",
//   },
//   {
//     teamname: "Zamalek",
//     logo: "/logos/zamalek.png",
//   },
//   {
//     teamname: "Elgouna",
//     logo: "/logos/elgouna.png",
//   },
//   {
//     teamname: "Etihad",
//     logo: "/logos/alittihad.png",
//   },
// ];

// import axios from "axios";

import axios from "axios";

let Teams = [];

const fetchTeams = () => {
  return axios
    .get("http://localhost:8808/EFA_manager/create_new_match/get_all_teams")
    .then(function (response) {
      Teams = response.data;
      console.log(Teams);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Teams, fetchTeams };
