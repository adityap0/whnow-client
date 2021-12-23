import React, { Component } from "react";
import { login } from "../Fetch";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      error: {
        username: null,
        password: null,
      },
    };
  }
  validateForm = () => {
    const { username, password } = this.state;
    if (!/^[0]?[789]\d{9}$/.test(username)) {
      this.setState({
        error: {
          username: "Invalid Mobile number",
        },
      });
      return false;
    } else if (password == null) {
      this.setState({
        error: {
          password: "Invalid Password",
        },
      });
      return false;
    } else {
      this.setState({
        error: {
          username: null,
          password: null,
        },
      });
      return true;
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      if (this.validateForm()) {
        const loginInfo = {
          username: Number(username),
          password,
        };
        let res = await login(loginInfo);
        if (res.error) {
          if (res.error.username) {
            this.setState({
              error: {
                username: res.error.username,
              },
            });
          } else if (res.error.password) {
            this.setState({
              error: {
                password: res.error.password,
              },
            });
          }
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          window.location.assign(`${process.env.REACT_APP_KEY_FE}/dashboard`);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  render() {

    return (
      <>
        <div className="mx-auto w-4/12 my-60">
          <h1 className="text-center text-2xl text-green-400 font-bold">
            Login
          </h1>
          <form
            action=""
            className="flex flex-col mx-auto bg-green-300"
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="username"
              className="m-2 p-2 border border-green-400"
              onChange={(e) => {
                this.setState({
                  username: e.target.value,
                });
              }}
            />
            {this.state.error.username ? (
              <span className="mx-4 text-red-500 font-bold">
                {this.state.error.username}
              </span>
            ) : null}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="m-2 p-2 border border-green-400"
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
            {this.state.error.password ? (
              <span className="mx-4 text-red-500 font-bold">
                {this.state.error.password}
              </span>
            ) : null}
            <button
              type="submit"
              className="bg-green-300 text-white p-2 font-bold text-2xl  border-white"
            >
              Submit
            </button>
          </form>
          <button
            className="bg-green-500 text-white p-2 font-bold  mx-36 my-4"
            onClick={() => {
              window.location.assign(`${process.env.REACT_APP_KEY_FE}/signup`);
            }}
          >
            Want to Register ? Click me!
          </button>
        </div>
      </>
    );
  }
}

export default Login;
