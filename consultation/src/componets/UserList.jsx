// UserList.js
import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
const UserList = ({
  users,
  selectedUsers,
  handleCheckboxChange,
  toggleActivated,
  handleDelete,
}) => {
  return (
    <div className="container">
      <div className="mb-3" style={{ textAlign: "right" }}>
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
      {users.map((user, index) => (
        <div className="row" key={user.username}>
          <div className="col-sm-10" key={user.username}>
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

          <div className="col-sm">
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
