import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>DashForge.IT</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notif-icon">
          <img src="notifications.svg" alt="" />
          <span>3</span>
        </div>
        <div className="profile">
          <img src="Jaimin_2023.png" alt="" />
          <span>Jcube333</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  );
}
