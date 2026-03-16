export default function AdminDashboard() {
  return (
    <div className="admin-content">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="dashboard-card">
            <i className="fa fa-cube"></i>
            <h5>Products</h5>
            <p>12</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="dashboard-card">
            <i className="fa fa-cogs"></i>
            <h5>Services</h5>
            <p>8</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="dashboard-card">
            <i className="fa fa-envelope"></i>
            <h5>Messages</h5>
            <p>24</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="dashboard-card">
            <i className="fa fa-users"></i>
            <h5>Visitors</h5>
            <p>1.2K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
