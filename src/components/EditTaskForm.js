import React from "react";

function EditTaskForm(props) {
  return (
    <div>
      <form
        className="flex flex-col w-4/12 m-4 border mx-auto"
        onSubmit={(e) => {
          props.handleEdit(e);
        }}
      >
        <input
          type="text"
          className="m-2"
          name="description"
          onChange={(e) => {
            props.handleChange(e);
          }}
          placeholder={props.editForm.task.description}
        />
        <input
          type="file"
          placeholder="Add Attachments"
          className="m-2"
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
        <input
          type="text"
          className="m-2"
          name="category"
          onChange={(e) => {
            props.handleChange(e);
          }}
          placeholder={props.editForm.task.category}
        />
        <button type="submit" className="bg-green-300 p-2">
          Confirm Edit
        </button>
      </form>
    </div>
  );
}

export default EditTaskForm;
