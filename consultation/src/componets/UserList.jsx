// UserList.js
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const UserList = ({
  users,
  selectedUsers,
  handleCheckboxChange,
  toggleActivated,
  handleDelete,
}) => {
  const [newuser , setNewUser] = useState(users)

  useEffect(() => {
   setNewUser(users)

  },[users])

  return (
    <div className="container content">
      <div className="row">
        <div className>
          <Button
            className="ButtonDelete"
            variant="primary"
            size="lg"
            onClick={handleDelete}
            disabled={selectedUsers.length === 0}
          >
            Delete Selected
          </Button>
        </div>
      </div>
      
        {newuser.map((user, index) => (
          <div className="row">
            <div className="col-md-10" key={user.username}>
              <Form>
                <Form.Check // prettier-ignore
                  className="Checkboxes"
                  type={"checkbox"}
                  id={user.username}
                  label={user.username}
                  key={user.username}
                  checked={selectedUsers.includes(user.username)}
                  onChange={() => handleCheckboxChange(user.username)}
                />
              </Form>
            </div>

            <div className="col-md-2">
              <Button
                className="ButtonisActivated"
                variant="primary"
                onClick={() => toggleActivated(user.username)}
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
