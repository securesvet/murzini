import "./Header.css";
import murzini from "/murzini-transparent-logo.png?url";

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="logo">
          <img src={murzini} alt="Murzini logo" />
        </div>
        <h1>Murzini</h1>
        <nav className="menu">
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
