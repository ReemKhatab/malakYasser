import axios from "axios";

let Matches = [];

const fetchMatches = () => {
  return axios
    .get("http://localhost:8808/view_matches")
    .then(function (response) {
      Matches = response.data;
      console.log("ana weslt", Matches);
      Matches = Matches.map(function (match) {
        var currentDate = new Date(match.matchdate);
        currentDate.setDate(currentDate.getDate() + 1);
        // console.log("current date", currentDate);
        // console.log("match old date", match.matchdate);
        // console.log("currentDate.getDate()", currentDate.getDate());
        match.matchdate = currentDate.toISOString(); 
        return match;
      });

      console.log("Matches after adding 1 day:", Matches);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Matches, fetchMatches };
