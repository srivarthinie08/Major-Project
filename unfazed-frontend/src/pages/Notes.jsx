import { useState, useEffect } from "react";
import axios from "axios";

function Notes() {
  const [patients, setPatients] = useState([]);
  const [notes, setNotes] = useState([]);
  const [patient, setPatient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    loadPatients();
    loadNotes();
  }, []);

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

  const loadNotes = async () => {
    try {
      const res = await axios.get(
        "https://unfazed-backend.onrender.com/api/notes",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://unfazed-backend.onrender.com/api/notes",
        {
          patient,
          title,
          description,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Note Added Successfully");

      setPatient("");
      setTitle("");
      setDescription("");

      loadNotes();
    } catch (err) {
      alert("Failed to Add Note");
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `https://unfazed-backend.onrender.com/api/notes/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      loadNotes();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📝 Therapy Notes</h2>

      <div className="card p-4 shadow mb-5">
        <form onSubmit={addNote}>

          <select
            className="form-control mb-3"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            required
          >
            <option value="">Select Patient</option>

            {patients.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            className="form-control mb-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button className="btn btn-primary w-100">
            Save Note
          </button>
        </form>
      </div>

      <div className="row">
        {notes.map((note) => (
          <div className="col-md-6 mb-4" key={note._id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{note.title}</h5>

                <p>{note.description}</p>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteNote(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;