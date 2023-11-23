"use client";
import React, { useState, useEffect } from "react";

const GetUsers = (props) => {
  const [users, setUsers] = useState([]);

  const refreshList = () => {
    props.client.getUsers().then((response) => {
      setUsers(response.data);
    });
  };

  const removeUser = (id) => {
    props.client.removeUser(id).then(() => refreshList());
  };

  const changeUserStatus = (id) => {
    props.client.changeUserStatus(id).then(() => refreshList());
  };


  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* TABLE OF USERS */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Team</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.lastPasswordChanged}</td>
                  <td>{user.role}</td>
                  <td>{user.team}</td>
                  <th>
                    <input
                      type="checkbox"
                      className="scale-75 toggle checked:bg-green-500"
                      defaultChecked={user.active ? true : false}
                      onClick={() => changeUserStatus(user._id)}
                    />
                  </th>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => removeUser(user._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default GetUsers;
