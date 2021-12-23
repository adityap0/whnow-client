import React, { Component } from "react";
import List from "./List";
import NewTaskForm from "./NewTaskForm";
import EditTaskForm from "./EditTaskForm";
import ListInfo from "./ListInfo";
import NavBar from "./NavBar";
import {newTask,
  getTasks,
  deleteTask,
  getSingleTask,
  editTask,
} from "../Fetch";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      description: null,
      file: null,
      category: null,
      user_id: this.props.user.user._id,
      tasks: [],
      showForm: false,
      showEditForm: false,
      editForm: null,
    };
  }
    handleSubmit = async (e) => {
    e.preventDefault();
    const { description, file, category, user_id } = this.state;
    const task = {
      description,
      file,
      category,
      user_id,
    };
    const data = new FormData();
    for (const name in task) {
      data.append(name, task[name]);
    }
    await newTask(data);
    window.location.reload();
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  handleLogout = (e) => {
    localStorage.clear();
    window.location.href = `${process.env.REACT_APP_KEY_FE}/`;
  };
  handleshowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  taskDelete = async (id) => {
    await deleteTask(id);
    window.location.reload();
  };
  taskEdit = async (id) => {
    let task2bedited = await getSingleTask(id);
    this.setState({
      showEditForm: !this.state.showEditForm,
      editForm: task2bedited,
    });
  };
  handleEdit = async (e) => {
    e.preventDefault();
    const { description, file, category, user_id, editForm } = this.state;
    const task = {
      description,
      file,
      category,
      user_id,
    };
    const data = new FormData();
    for (const name in task) {
      data.append(name, task[name]);
    }
    await editTask(data, editForm.task._id);
    window.location.reload();
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  };
  handleChange = (e) => {
    let name = e.target.name;
    if (e.target.files) {
      this.setState({
        file: e.target.files[0],
      });
    }
    this.setState({
      [name]: e.target.value,
    });
  };


  async componentDidMount() {
    const res = await getTasks(this.state.user_id);
    var tasks = res.tasks.tasks;
    this.setState({
      tasks,
    });
  }
  render() {
    const user = this.state.user.user;
    const tasks = this.state.tasks;
    const showForm = this.state.showForm;
    const showEditForm = this.state.showEditForm;
    return (
      <>
        <div className="bg-green-300 p-4">
          <h1 className="text-center text-xl">Hey, {user.name}</h1>
        </div>

        <NavBar
          handleLogout={this.handleLogout}
          handleshowForm={this.handleshowForm}
        />
        <div>
          {showForm ? (
            <NewTaskForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          {showEditForm ? (
            <EditTaskForm
              editForm={this.state.editForm}
              handleChange={this.handleChange}
              handleEdit={this.handleEdit}
            />
          ) : null}
        </div>
        <div className="m-4">
          <ListInfo />
          <List
            tasks={tasks}
            taskDelete={this.taskDelete}
            taskEdit={this.taskEdit}
          />
        </div>
      </>
    );
  }
}

export default Dashboard;
