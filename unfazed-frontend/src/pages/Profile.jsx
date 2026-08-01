import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://unfazed-backend.onrender.com/api/therapist/profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadProfile();
  }, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="card shadow-lg p-5"
        style={{
          width: "500px",
          borderRadius: "20px",
        }}
      >
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            width="100"
          />
          <h2 className="mt-3">{profile.name}</h2>
          <p className="text-muted">Therapist</p>
        </div>

        <hr />

        <h5>📧 Email</h5>
        <p>{profile.email}</p>

        <h5>🆔 Therapist ID</h5>
        <p>{profile._id}</p>

        <h5>🟢 Status</h5>
        <span className="badge bg-success">
          Active
        </span>
      </div>
    </div>
  );
}

export default Profile;