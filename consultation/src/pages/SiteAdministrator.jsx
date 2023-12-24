import React, { useState } from "react";
import { Users } from "../helpers/Users";
import { Managers } from "../helpers/Managers";
import UserList from "../componets/UserList";
import Button from "react-bootstrap/Button";
import SiteAdminNavbar from "../componets/SiteAdminNavbar";
import "../styles/SiteAdministrator.css";

function SiteAdministrator() {
  const [users, setUsers] = useState(Users);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [managers, setManagers] = useState(Managers);
  const [selectedManagers, setSelectedManagers] = useState([]);
  const [displayCustomers, setDisplayCustomers] = useState(true);
  const [displayManagers, setDisplayManagers] = useState(false);

  const toggleActivatedUser = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === userId ? { ...user, activated: !user.activated } : user
      );
      return updatedUsers;
    });
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
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]);
  };

  const toggleActivatedManager = (userId) => {
    setManagers((prevManagers) => {
      const updatedManagers = prevManagers.map((manager) =>
        manager.id === userId
          ? { ...manager, activated: !manager.activated }
          : manager
      );
      return updatedManagers;
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
    setManagers((prevManagers) =>
      prevManagers.filter((manager) => !selectedManagers.includes(manager.id))
    );
    setSelectedManagers([]);
  };

  return (
    <>
      <SiteAdminNavbar />
      <div className="container background">
        <h2>Manage Users</h2>
        <div className="row">
          <div className="col-sm-2">
            <Button
              className="ButtonShow"
              variant="primary"
              size="lg"
              onClick={() => {
                setDisplayCustomers(true);
                setDisplayManagers(false);
              }}
            >
              Show Customers
            </Button>
          </div>
          <div className="col-sm-2">
            <Button
              className="ButtonShow"
              variant="primary"
              size="lg"
              onClick={() => {
                setDisplayCustomers(false);
                setDisplayManagers(true);
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
