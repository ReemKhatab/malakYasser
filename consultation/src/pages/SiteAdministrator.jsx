import React, { useState } from "react";
import { Users, fetchUsers } from "../helpers/Users";
import { Managers, fetchManagers } from "../helpers/Managers";
import UserList from "../componets/UserList";
import Button from "react-bootstrap/Button";
import SiteAdminNavbar from "../componets/SiteAdminNavbar";
import "../styles/SiteAdministrator.css";
import axios from "axios";

function SiteAdministrator() {
  const [users, setUsers] = useState(Users);
  const [managers, setManagers] = useState(Managers);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedManagers, setSelectedManagers] = useState([]);
  const [displayCustomers, setDisplayCustomers] = useState(true);
  const [displayManagers, setDisplayManagers] = useState(false);

  const toggleActivatedUser = (userId) => {
    axios
      .put("http://localhost:8808/siteadministrator/updateActivateUser", [
        userId,
        !users.find((user) => user.username === userId).activated,
      ])
      .then(function (response) {
        console.log("Successfully updated user:", userId);
        console.log(
          "with booooleannn:",
          !users.find((user) => user.username === userId).activated
        );
        console.log(response.data);
        // setUsers((prevUsers) => {
        //   const updatedUsers = prevUsers.map((user) =>
        //     user.username === userId
        //       ? { ...user, activated: !user.activated }
        //       : user
        //   );
        //   return updatedUsers;
        // });
        fetchUsers().then(() => {
          console.log(Users);
          setUsers(Users);
        });
      })
      .catch(function (error) {
        console.error("Error updating user:", userId);
        console.error(error);
      });

    // setUsers((prevUsers) => {
    //   const updatedUsers = prevUsers.map((user) =>
    //     user.username === userId
    //       ? { ...user, activated: !user.activated }
    //       : user
    //   );
    //   return updatedUsers;
    // });
  };

  const handleCheckboxChangeUser = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const handleDeleteUser = () => {
    selectedUsers.forEach((selecteduser, index) => {
      axios
        .delete("http://localhost:8808/siteadministrator/deleteuser", {
          data: { selecteduser: selecteduser }, // Use 'data' for request body
        })
        .then(function (response) {
          fetchUsers().then(() => {
            console.log(Users);
            setUsers(Users);
          });
          console.log("Successfully deleted user:", selecteduser);
          console.log(response.data); // Assuming the response contains useful data
        })
        .catch(function (error) {
          console.error("Error deleting user:", selecteduser);
          console.error(error);
        });
    });

    // setUsers((prevUsers) =>
    //   prevUsers.filter((user) => !selectedUsers.includes(user.username))
    // );
    setSelectedUsers([]);
  };

  const toggleActivatedManager = (userId) => {
    axios
      .put("http://localhost:8808/siteadministrator/updateActivateUser", [
        userId,
        !managers.find((manager) => manager.username === userId).activated,
      ])
      .then(function (response) {
        console.log("Successfully updated user:", userId);
        console.log(
          "with booooleannn:",
          !managers.find((manager) => manager.username === userId).activated
        );
        console.log(response.data);
        fetchManagers().then(() => {
          console.log(Managers);
          setManagers(Managers);
        });
        // setManagers((prevManagers) => {
        //   const updatedManagers = prevManagers.map((manager) =>
        //     manager.username === userId
        //       ? { ...manager, activated: !manager.activated }
        //       : manager
        //   );
        //   return updatedManagers;
        // });
      })
      .catch(function (error) {
        console.error("Error updating user:", userId);
        console.error(error);
      });
  };

  const handleCheckboxChangeManager = (userId) => {
    setSelectedManagers((prevSelectedManagers) => {
      if (prevSelectedManagers.includes(userId)) {
        return prevSelectedManagers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedManagers, userId];
      }
    });
  };

  const handleDeleteManager = () => {
    selectedManagers.forEach((selecteduser, index) => {
      axios
        .delete("http://localhost:8808/siteadministrator/deleteuser", {
          data: { selecteduser: selecteduser },
        })
        .then(function (response) {
          fetchManagers().then(() => {
            console.log(Managers);
            setManagers(Managers);
          });
          console.log("Successfully deleted manager:", selecteduser);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error("Error deleting user:", selecteduser);
          console.error(error);
        });
    });
    // setManagers((prevManagers) =>
    //   prevManagers.filter(
    //     (manager) => !selectedManagers.includes(manager.username)
    //   )
    // );
    setSelectedManagers([]);
  };

  return (
    <>
      <SiteAdminNavbar />
      <div className="container background">
        <h2>Manage Users</h2>
        <div className="row">
          <div className="col-md-2">
            <Button
              className="ButtonShow"
              variant="primary"
              size="lg"
              onClick={() => {
                setDisplayCustomers(true);
                setDisplayManagers(false);
                fetchUsers().then(() => {
                  console.log(Users);
                  setUsers(Users);
                });
              }}
            >
              Show Customers
            </Button>
          </div>
          <div className="col-md-2">
            <Button
              className="ButtonShow"
              variant="primary"
              size="lg"
              onClick={() => {
                setDisplayCustomers(false);
                setDisplayManagers(true);
                fetchManagers().then(() => {
                  console.log(Managers);
                  setManagers(Managers);
                });
              }}
            >
              Show Managers
            </Button>
          </div>
        </div>
        {displayCustomers && (
          <UserList
            users={users}
            selectedUsers={selectedUsers}
            handleCheckboxChange={handleCheckboxChangeUser}
            toggleActivated={toggleActivatedUser}
            handleDelete={handleDeleteUser}
          />
        )}
        {displayManagers && (
          <UserList
            users={managers}
            selectedUsers={selectedManagers}
            handleCheckboxChange={handleCheckboxChangeManager}
            toggleActivated={toggleActivatedManager}
            handleDelete={handleDeleteManager}
          />
        )}
      </div>
    </>
  );
}

export default SiteAdministrator;
