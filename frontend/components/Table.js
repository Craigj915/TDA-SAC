import React from "react";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Reason</th>
              <th>Date</th>
              <th>Notes</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Ill</div>
                  </div>
                </div>
              </td>
              <td>31/9/2023</td>
              <td>Dying - doctor note</td>
              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Holiday</div>
                  </div>
                </div>
              </td>
              <td>20/10/2023</td>
              <td>Spain bla bla</td>
              <th>
                <button className="btn btn-ghost btn-xs">edit</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Table;
