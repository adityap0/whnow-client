import React, { Component } from "react";

class NewTaskForm extends Component {
  render() {
    return (
      <div>
        <form
          className="flex flex-col w-4/12 m-4 border"
            onSubmit={(e) => {
              this.props.handleSubmit(e);
            }}
        >
          <input
            type="text"
            placeholder="Add Task description"
            className="m-2"
            name="description"
            onChange={(e) => {
              this.props.handleChange(e);
            }}
          />
          <input
            type="file"
            placeholder="Add Attachments"
            className="m-2"
            onChange={(e) => {
              this.props.handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Add Category"
            className="m-2"
            name="category"
            onChange={(e) => {
              this.props.handleChange(e);
            }}
          />
          <button type="submit" className="bg-green-300 p-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
