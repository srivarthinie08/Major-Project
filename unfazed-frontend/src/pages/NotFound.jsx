function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center">
        <h1 style={{ fontSize: "90px" }}>404</h1>
        <h3>Page Not Found</h3>
        <p>The page you requested doesn't exist.</p>
      </div>
    </div>
  );
}

export default NotFound;