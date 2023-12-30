import axios from "axios";

let Managers = [];

const fetchManagers = () => {
  return axios
    .get("http://localhost:8808/siteadministrator/managers")
    .then(function (response) {
      Managers = response.data;
      console.log(Managers);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export { Managers, fetchManagers };
