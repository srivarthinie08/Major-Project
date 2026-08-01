import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaCalendarAlt,
  FaStickyNote,
  FaRupeeSign,
} from "react-icons/fa";

function Dashboard() {
  const [data, setData] = useState({
    patients: 0,
    appointments: 0,
    notes: 0,
    earnings: 0,
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://unfazed-backend.onrender.com/api/dashboard",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Patients",
      value: data.patients,
      icon: <FaUsers size={35} />,
      color: "#4F46E5",
    },
    {
      title: "Appointments",
      value: data.appointments,
      icon: <FaCalendarAlt size={35} />,
      color: "#10B981",
    },
    {
      title: "Notes",
      value: data.notes,
      icon: <FaStickyNote size={35} />,
      color: "#F59E0B",
    },
    {
      title: "Earnings",
      value: `₹${data.earnings}`,
      icon: <FaRupeeSign size={35} />,
      color: "#EF4444",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-5">
        Therapist Dashboard
      </h1>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "18px",
              }}
            >
              <div className="card-body text-center">

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: card.color,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 15px",
                  }}
                >
                  {card.icon}
                </div>

                <h5>{card.title}</h5>

                <h2 className="fw-bold">
                  {card.value}
                </h2>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          onClick={() =>
            window.open(
              "https://unfazed-backend.onrender.com/api/reports/patients",
              "_blank"
            )
          }
        >
          📄 Download Patient Report
        </button>
      </div>
    </div>
  );
}

export default Dashboard;