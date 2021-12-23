import React from "react";

function NavBar(props) {
  return (
    <div className="m-4">
      <button
        className="border p-2 rounded bg-red-400 mx-4"
        onClick={(e) => {
          props.handleLogout(e);
        }}
      >
        Log Out
      </button>
      <button
        className="border p-2 rounded bg-green-300"
        onClick={() => {
          props.handleshowForm();
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default NavBar;
