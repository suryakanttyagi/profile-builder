import NavMenu from '../nav-menu/navMenu'

function Nav() {
  return (
    <div className="nav">
      <header>
        <nav>
          <div className="left">.builder</div>
          <NavMenu/>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
