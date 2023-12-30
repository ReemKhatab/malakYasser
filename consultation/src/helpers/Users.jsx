import axios from "axios";

let Users = [];

const fetchUsers = () => {
  return axios
    .get("http://localhost:8808/siteadministrator/customers")
    .then(function (response) {
      Users = response.data;
      console.log(Users);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Users, fetchUsers };
