import "./Navbar.css";

export function NavBar(){
    return(
        <nav className="nav">
        <h1 className="brand">Fullmetal Alchemist</h1>
          <ul className="nav-list">
            <li className="nav-list-tag">about us</li>
            <li className="nav-list-tag">info</li>
            <li className="nav-list-tag">support us</li>
          </ul>
        </nav>
    )
}