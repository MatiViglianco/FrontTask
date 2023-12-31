import axios from "axios";

const taskApi = axios.create({
  baseURL: "https://taskapi-pard.onrender.com/tasks/",
});

export const getApi = () => {
  return taskApi.get("/").catch((error) => {
    // Manejar el error en caso de que la solicitud falle
    console.error(error);
  });
};

export const getOneApi = (id) => {
  return taskApi.get(`/${id}/`).catch((error) => {
    // Manejar el error en caso de que la solicitud falle
    console.error(error);
  });
};

export const PostApi = (task) => {
  return taskApi.post("/", task);
};

export const deleteApi = (id) => {
  return taskApi.delete(`/${id}`);
};

export const updateApi = (id, task) => {
  return taskApi.put(`/${id}/`, task);
};
