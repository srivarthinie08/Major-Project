import api from "./api";

export const createPatient = (data, token) => {
  return api.post("/patients", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPatients = (token) => {
  return api.get("/patients", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePatient = (id, token) => {
  return api.delete(`/patients/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};