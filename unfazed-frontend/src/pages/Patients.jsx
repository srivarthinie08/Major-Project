import axios from "axios";
import { useEffect, useState } from "react";

function Patients() {
  const token = localStorage.getItem("token");

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
  });

  const loadPatients = async () => {
    try {
      const res = await axios.get(
        "https://unfazed-backend.onrender.com/api/patients",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setPatients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addPatient = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://unfazed-backend.onrender.com/api/patients",
        form,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Patient Added Successfully");

      setForm({
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
      });

      loadPatients();
    } catch (err) {
      alert("Failed to Add Patient");
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(
        `https://unfazed-backend.onrender.com/api/patients/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      loadPatients();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">

      <h2 className="mb-4">👨‍⚕️ Patient Management</h2>

      <div className="card shadow p-4 mb-5">

        <h4 className="mb-3">Add Patient</h4>

        <form onSubmit={addPatient}>

          <input
            className="form-control mb-3"
            placeholder="Patient Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <div className="row">

            <div className="col-md-4">
              <input
                className="form-control mb-3"
                placeholder="Age"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-control mb-3"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                className="form-control mb-3"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />

          <button className="btn btn-success">
            Add Patient
          </button>

        </form>

      </div>

      <div className="d-flex justify-content-between mb-3">

        <h4>Patient List</h4>

        <input
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search Patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="card shadow">

        <table className="table table-hover">

          <thead className="table-primary">

            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredPatients.map((patient) => (

              <tr key={patient._id}>

                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePatient(patient._id)}
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

export default Patients;