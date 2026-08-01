import api from "./api";

export const createNote = (data, token) => {
  return api.post("/notes", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getNotes = (token) => {
  return api.get("/notes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteNote = (id, token) => {
  return api.delete(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};