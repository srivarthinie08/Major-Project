import { useEffect, useState } from "react";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
} from "../services/appointmentService";

function Appointments() {
  const [formData, setFormData] = useState({
    patient: "",
    date: "",
    time: "",
    reason: "",
  });

  const [appointments, setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  const loadAppointments = async () => {
    try {
      const res = await getAppointments(token);
      setAppointments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAppointment(formData, token);

      alert("Appointment Added Successfully");

      setFormData({
        patient: "",
        date: "",
        time: "",
        reason: "",
      });

      loadAppointments();
    } catch (err) {
      alert("Failed to Add Appointment");
    }
  };

  const handleDelete = async (id) => {
    await deleteAppointment(id, token);
    loadAppointments();
  };

  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold mb-4">
        📅 Appointment Management
      </h2>

      <div className="card shadow p-4 mb-5">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="patient"
              placeholder="Patient Name"
              value={formData.patient}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              name="reason"
              placeholder="Reason"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">
            Save Appointment
          </button>

        </form>

      </div>

      <div className="card shadow p-4">

        <h4 className="mb-3">
          Appointment List
        </h4>

        <table className="table table-hover">

          <thead className="table-primary">
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {appointments.map((item) => (

              <tr key={item._id}>
                <td>{item.patient}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.reason}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Appointments;