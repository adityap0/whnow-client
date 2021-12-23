import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.tasks.map((task, id) => {
            return (
              <li key={id}>
                <ul className="flex justify-between my-2 border bg-green-300 p-1 w-4/5 mx-auto">
                  <li className="w-1/5">{id + 1}.</li>
                  <li className="w-1/5">{task.description}</li>
                  <li className="w-1/5">{task.category}</li>
                  <li className="w-1/5">
                    <a
                      href={`${process.env.REACT_APP_KEY}/${task.file.path}`}
                      className="flex"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      {task.file.name}
                      
                    </a>
                  </li>
                  <li className="w-1/5 flex justify-between">
                    <button
                      className="border px-2 bg-white rounded"
                      onClick={() => {
                        this.props.taskEdit(task._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="border px-2 bg-red-400 rounded"
                      onClick={() => {
                        this.props.taskDelete(task._id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default List;
