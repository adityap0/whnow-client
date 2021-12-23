import React from "react";

function ListInfo(props) {
  return (
    <div>
      <h1 className="text-center my-10 text-xl underline">Task Item List</h1>
      <nav className="border bg-purple-300 w-4/5 mx-auto p-1">
        <ul className="flex justify-between">
          <li className="w-1/5">S.No</li>
          <li className="w-1/5">Description</li>
          <li className="w-1/5">Category</li>
          <li className="w-1/5">Attachment</li>
          <li className="w-1/5">Action</li>
        </ul>
      </nav>
    </div>
  );
}

export default ListInfo;
