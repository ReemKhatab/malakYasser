// UserList.js
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import UserItem from "../componets/UserItem";
import Button from "@mui/material/Button";

const UserList = ({
  users,
  selectedUsers,
  handleCheckboxChange,
  toggleActivated,
  handleDelete,
}) => {
  return (
    <div className="container">
      <div class="mb-3 " style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          disabled={selectedUsers.length === 0}
        >
          Delete Selected
        </Button>
      </div>
      {users.map((user, index) => (
        <div className="row" key={user.id}>
          <div className="col-sm">
            <Checkbox
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleCheckboxChange(user.id)}
            />
          </div>
          <div className="col-sm">
            <UserItem name={user.name} />
          </div>
          <div className="col-sm">
            <Button
              variant="contained"
              onClick={() => toggleActivated(user.id)}
              style={{ background: user.activated ? "red" : "green" }}
            >
              {user.activated ? "Deactivate" : "Activate"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
