"use client";
import React, { useState, useEffect } from "react";

const GetTeams = (props) => {
  const [teams, setTeams] = useState([]);
  const [modalOpen, setModalOpen] = useState(null);

  const refreshList = () => {
    props.client.getTeams().then((response) => {
      setTeams(response.data);
    });
  };

  const removeTeam = (id) => {
    props.client.removeTeam(id).then(() => refreshList());
  };

  const changeTeamStatus = (id) => {
    props.client.changeTeamStatus(id).then(() => refreshList());
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="overflow-x-auto">
        <table className="table">
          {/* TABLE OF TEAMS */}
          <thead>
            <tr>
              <th>Team</th>
              <th>Manager</th>
              <th>Members</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {teams?.map((team) => {
              return (
                <tr key={team._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div id="team" className="font-bold">
                          {team.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td id="manager">{team.manager}</td>
                  <td className="text-center">
                    <button
                      className="btn text-sm"
                      onClick={() => setModalOpen(team._id)}
                    >
                      {team.members.length + 1}
                    </button>
                    <dialog
                      id={`my_modal_${team._id}`}
                      className="modal"
                      open={modalOpen === team._id}
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">{team.name}</h3>
                        <p className="py-4 font-bold text-gray-600">
                          {team.manager}
                        </p>
                        {team.members?.map((member) => {
                          return (
                            <ul id="members" className="py-2">
                              <li>{member}</li>
                            </ul>
                          );
                        })}
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button onClick={() => setModalOpen(null)}>
                          close
                        </button>
                      </form>
                    </dialog>
                  </td>
                  <th id="status">
                    <input
                      type="checkbox"
                      className="scale-75 toggle checked:bg-green-500"
                      defaultChecked={team.active ? true : false}
                      onClick={() => changeTeamStatus(team._id)}
                    />
                  </th>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => removeTeam(team._id)}
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

export default GetTeams;
