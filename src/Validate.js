validateForm = (state) => {
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
validateRegisterForm = (state, cb) => {
  const { name, username, password } = state;
  if (!/^[0]?[789]\d{9}$/.test(username)) {
    setState({
      error: {
        username: "Invalid Mobile number",
      },
    });
    return false;
  } else if (password == null) {
    setState({
      error: {
        password: "Invalid Password",
      },
    });
    return false;
  } else if (name == null) {
    setState({
      error: {
        password: "Invalid Password",
      },
    });
    return false;
  } else {
    setState({
      error: {
        username: null,
        password: null,
      },
    });
    return true;
  }
};
module.exports = { validateForm };
