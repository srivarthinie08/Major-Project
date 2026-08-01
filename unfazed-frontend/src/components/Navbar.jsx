import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(90deg,#4F46E5,#7C3AED)",
      }}
    >
      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold text-white fs-3"
        >
          🧠 Unfazed
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/patients">
                    Patients
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/appointments">
                    Appointments
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/notes">
                    Notes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/chat">
                    Chat
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item ms-2">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;