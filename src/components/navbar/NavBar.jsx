import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
              <a href="/category/hombre" className="nav-link">
                Caballeros
              </a>
              <a href="/category/mujer" className="nav-link">
                Damas
              </a>
            </div>
          </div>
          <CartWidget/>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
