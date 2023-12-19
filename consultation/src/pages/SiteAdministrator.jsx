import React, { useState } from "react";
import { Users } from "../helpers/Users";
import { Managers } from "../helpers/Managers";
import UserList from "../componets/UserList";
import Button from "@mui/material/Button";
import SiteAdminNavbar from "../componets/SiteAdminNavbar";
import "../styles/SiteAdministrator.css";
import Form from "react-bootstrap/Form";

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
        <div className="row mt-5 mb-5">
          <div className="col-sm-2">
            <Form>
              <Form.Check // prettier-ignore
                size={10}
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              {/* function Toggle(props) {
    const [show, setShow] = useState(true);
    return (
        <Form.Check
            onClick={() => setShow(!show)}
            type="switch"
            id="custom-switch"
            label={show ? 'Text1' : 'Text2'}
        />
    );
   } */}
            </Form>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setDisplayCustomers(true);
                setDisplayManagers(false);
              }}
            >
              Customers
            </Button>
          </div>
          <div className="col-sm-2">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setDisplayCustomers(false);
                setDisplayManagers(true);
              }}
            >
              Managers
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
