import api from "./api";

export const createAppointment = (data, token) => {
  return api.post("/appointments", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAppointments = (token) => {
  return api.get("/appointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteAppointment = (id, token) => {
  return api.delete(`/appointments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};