"use client";
import React, { useState, useEffect } from "react";
import { FaXmark, FaRegBell } from "react-icons/fa6";

const Navigation = (props) => {
  const token = window.localStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [modalOneOpen, setModalOneOpen] = useState(false);
  const [startingDate, setStartDate] = useState("");
  const [endingDate, setEndDate] = useState("");
  const [modalTwoOpen, setModalTwoOpen] = useState(false);
  const [modalProfileOpen, setModalProfileOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const refreshList = () => {
    props.client.getUserByToken(token).then((response) => {
      setCurrentUser(response.data);
      setNotifications(response.data.notifications);
      console.log(currentUser);
    });
  };

  useEffect(() => {
    refreshList();
  }, []);

  const openModalOne = () => {
    setModalOneOpen(true);
  };

  const closeModalOne = () => {
    setModalOneOpen(false);
  };

  const openModalTwo = () => {
    setModalTwoOpen(true);
  };

  const closeModalTwo = () => {
    setModalTwoOpen(false);
  };

  const openModalProfile = () => {
    setModalProfileOpen(true);
  };

  const closeModalProfile = () => {
    setModalProfileOpen(false);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log("Selected start date:", startingDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    console.log("Selected end date:", endingDate);
  };

  const submitSickLeaveHandler = async (e) => {
    e.preventDefault();

    const title = e.target.reason.value;
    const userid = currentUser._id;
    const email = currentUser.email;
    const note = e.target.doctorNote.value;
    const colour = "#FFA500";

    props.client.addSickLeave(title, userid, email, colour, note);

    e.target.reset();
  };

  const submitAnnualLeaveHandler = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const userid = currentUser._id;
    const email = currentUser.email;
    const startDate = startingDate;
    const endDate = endingDate;
    const note = e.target.holidayNote.value;
    const colour = "#4682B4";

    props.client.addAnnualLeave(
      title,
      userid,
      email,
      startDate,
      endDate,
      colour,
      note
    );

    e.target.reset();
  };

  const submitUpdateProfileHandler = (e, id) => {
    e.preventDefault();

    const forename = e.target.forename.value;
    const surname = e.target.surname.value;
    const password = e.target.password.value;
    const icon = e.target.icon.value;

    props.client.updateUser(id, forename, surname, password, icon);

    e.target.reset();
  };

  return (
    <div>
      <div className="flex gap-8">
        <button className="btn btn-ghost btn-md" onClick={openModalProfile}>
          Profile
        </button>

        <div className="dropdown dropdown-hover dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-md">
            Add
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
          >
            <li className="my-2">
              <button
                className="btn btn-ghost btn-md text-center"
                onClick={openModalOne}
              >
                Sick Leave
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost btn-md text-center"
                onClick={openModalTwo}
              >
                Annual Leave
              </button>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover dropdown-end">
          <label tabIndex={0} className="indicator btn btn-ghost btn-md">
            <FaRegBell size={16} className="w-fit h-fit place-items-center" />
            <span className="indicator-item badge badge-primary">
              {notifications.length}
            </span>
          </label>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {notifications.map((notification) => (
              <li className="indicator w-fit my-2" key={notification.date}>
                <div className="shadow-md p-4">
                  <div>
                    {notification.seen ? (
                      ""
                    ) : (
                      <span className="indicator-item badge badge-secondary"></span>
                    )}
                    {notification.message}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profile Modal */}
      <div
        className="modal fixed flex justify-center items-center"
        open={modalProfileOpen}
        onKeyDown={(e) => e.key === "Escape" && closeModalProfile()}
        onClick={(e) => e.target === e.currentTarget && closeModalProfile()}
      >
        <div className="modal-box flex flex-col items-center">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModalProfile}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Profile Modal</h3>
          <form
            className="py-4 gap-4 flex flex-col items-center"
            onSubmit={(e) => {
              submitUpdateProfileHandler(e, currentUser._id);
              closeModalProfile();
            }}
          >
            <input
              id="forename"
              type="text"
              placeholder="Forename here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              id="surname"
              type="text"
              placeholder="Surname here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <input
                  id="password"
                  type={checked ? "text" : "password"}
                  placeholder="password here"
                  className="label-text input input-bordered w-full max-w-xs"
                />
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  className="checkbox"
                />
              </label>
            </div>
            <input
              id="icon"
              type="file"
              className="file-input w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md text-center">Submit</button>
          </form>
        </div>
      </div>

      {/* Modal One */}
      <div
        className="modal fixed flex justify-center items-center"
        open={modalOneOpen}
        onKeyDown={(e) => e.key === "Escape" && closeModalOne()}
        onClick={(e) => e.target === e.currentTarget && closeModalOne()}
      >
        <div className="modal-box flex flex-col items-center">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModalOne}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Add Sick Leave</h3>
          <form
            className="py-4 gap-4 flex flex-col items-center"
            onSubmit={submitSickLeaveHandler}
          >
            <input
              id="reason"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              id="doctorNote"
              type="file"
              className="file-input w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md text-center">Submit</button>
          </form>
        </div>
      </div>
      {/* Modal Two */}
      <div
        className="modal fixed flex justify-center items-center"
        open={modalTwoOpen}
        onKeyDown={(e) => e.key === "Escape" && closeModalTwo()}
        onClick={(e) => e.target === e.currentTarget && closeModalTwo()}
      >
        <div className="modal-box flex flex-col items-center">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModalTwo}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Add Annual Leave</h3>
          <form
            className="py-4 gap-4 flex flex-col"
            onSubmit={submitAnnualLeaveHandler}
          >
            <input
              id="title"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex flex-col">
              <lable className="text-sm">Start date</lable>
              <input
                id="startDate"
                type="date"
                value={startingDate}
                onChange={handleStartDateChange}
                className="bordered w-fit max-w-xs p-2"
              />
            </div>
            <div className="flex flex-col">
              <lable className="text-sm">End date</lable>
              <input
                id="endDate"
                type="date"
                value={endingDate}
                onChange={handleEndDateChange}
                className="bordered w-fit max-w-xs p-2"
              />
            </div>
            <input
              id="holidayNote"
              type="text"
              placeholder="Note"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md w-fit text-center absolute right-4 bottom-10">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
