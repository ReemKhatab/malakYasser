// export const Stadiums = [
//     {
//       name: "Cairo Stadium",
//       rows: 5,
//       columns:6,
//       numberOfSeats:30,
//     },
//     {
//       name: "Alex Stadium",
//       rows: 5,
//       columns:6,
//       numberOfSeats:30,
//     },
//     {
//       name: "Suez Stadium",
//       rows: 5,
//       columns:6,
//       numberOfSeats:30,
//     },
//   ];

import axios from "axios";

let Stadiums = [];

const fetchStadiums = () => {
  return axios
    .get("http://localhost:8808/EFA_manager/create_new_match/get_all_stadiums")
    .then(function (response) {
      Stadiums = response.data;
      console.log(Stadiums);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Stadiums, fetchStadiums };
