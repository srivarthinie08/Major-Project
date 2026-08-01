import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
      }}
    >
      <div className="container py-5">

        <div className="text-center py-5">
          <h1 className="display-4 fw-bold text-primary">
            Welcome to Unfazed
          </h1>

          <p className="lead mt-3 text-secondary">
            A Professional Therapist Management System for managing
            patients, appointments, notes and communication.
          </p>

          <div className="mt-4">
            <Link to="/login" className="btn btn-primary btn-lg me-3">
              Login
            </Link>

            <Link to="/register" className="btn btn-outline-primary btn-lg">
              Register
            </Link>
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h3>👨‍⚕️</h3>
                <h5 className="mt-3">Patient Management</h5>
                <p>
                  Store and manage patient information securely.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h3>📅</h3>
                <h5 className="mt-3">Appointments</h5>
                <p>
                  Schedule and manage appointments with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h3>💬</h3>
                <h5 className="mt-3">Live Chat</h5>
                <p>
                  Communicate instantly using the built-in chat feature.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;