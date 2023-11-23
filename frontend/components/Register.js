"use client";
import React, { useState, useEffect } from "react";

const Register = (props) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [teams, setTeams] = useState([]);

  const teamExists = async () => {
    const response = await props.client.getTeams();
    setTeams(response.data);
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    teamExists();
  }, []);

  const handleRoleClick = (roleName) => {
    setSelectedRole(roleName);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSelectedTeam(inputValue);
  };

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 100);
  };

  const handleTeamClick = (teamName) => {
    setSelectedTeam(teamName);
    setDropdownVisible(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const teamName = e.target.team.value || selectedTeam; // Usuisg teamName to avoid conflicts
    const role = selectedRole;

    const teamExistsList = await teamExists();

    const existingTeam = teamExistsList.find((team) => team.name === teamName);

    if (role !== "Manager" && existingTeam) {
      props.client.register(email, password, role, teamName);

      const newMember = e.target.email.value;
      props.client.updateTeam(existingTeam._id, newMember);
    } else {
      const manager = e.target.email.value;

      props.client.register(email, password, role, teamName);
      props.client.registerTeam(teamName, manager);
    }

    e.target.reset();
  };

  const roles = [
    "Admin",
    "Director",
    "Manager",
    "Staff",
    "Instructor",
    "Course Manager",
    "Marketing",
    "Admissions",
  ];

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div id="addUser">
      <form className="flex gap-4 items-center" onSubmit={submitHandler}>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className="text-center input input-bordered w-60 max-w-xs"
        />
        <input
          type="text"
          id="password"
          placeholder="Password"
          className="text-center input input-bordered w-60 max-w-xs"
        />
        <div className="dropdown max-w-xs">
          <label tabIndex={0} className="btn m-1">
            {selectedRole ? selectedRole : "Role"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            {roles?.map((role) => (
              <li key={role}>
                <a onClick={() => handleRoleClick(role)}>{role}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-60 max-w-xs">
          <input
            type="text"
            id="team"
            placeholder="Team Name"
            value={selectedTeam ? selectedTeam : ""}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            className="text-center input input-bordered w-full"
          />
          {dropdownVisible && (
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-52">
              {teams?.map((team) => (
                <li key={team.name}>
                  <a onClick={() => handleTeamClick(team.name)}>{team.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="btn btn-ghost btn-xs" onClick={refresh}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Register;
{
  /* <div className="dropdown max-w-xs">
          <label tabIndex={0} className="btn m-1">
            {selectedTeam ? selectedTeam : "Team"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {teams?.map((team) => (
              <li key={team.name}>
                <a onClick={() => handleTeamClick(team.name)}>{team.name}</a>
              </li>
            ))}
          </ul>
        </div> */
}
