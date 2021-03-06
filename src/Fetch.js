
export async function login(data) {
  const url = `${process.env.REACT_APP_KEY}/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function register(data) {
  const url = `${process.env.REACT_APP_KEY}/signup`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function newTask(data) {
  const url = `${process.env.REACT_APP_KEY}/tasks/new`;
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  return response.json();
}
export async function getSingleTask(id) {
  const url = `${process.env.REACT_APP_KEY}/tasks/find/${id}`;
  const response = await fetch(url);
  return response.json();
}
export async function editTask(data, id) {
  console.log(data, id);
  const url = `${process.env.REACT_APP_KEY}/tasks/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    body: data,
  });
  return response.json();
}

export async function getTasks(id) {
  const url = `${process.env.REACT_APP_KEY}/tasks/${id}`;
  const response = await fetch(url);
  return response.json();
}

export async function deleteTask(id) {
  const url = `${process.env.REACT_APP_KEY}/tasks/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  return response.json();
}
// module.exports = {
//   login,
//   register,
//   newTask,
//   getTasks,
//   deleteTask,
//   editTask,
//   getSingleTask,
// };

