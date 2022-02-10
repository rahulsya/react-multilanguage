import "../styles/navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">React-i18n</div>
        <div className="links">
          <a className="active">Home</a>
          <a>Features</a>
          <a>About</a>
          <a>Support</a>
          <select className="btn-switch" name="Languages">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
