import axios from "axios";

let Matches = [];

const fetchMatches = () => {
  return axios
    .get("http://localhost:8808/view_matches")
    .then(function (response) {
      console.log("ana weslt",Matches);
      Matches = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Matches, fetchMatches };
