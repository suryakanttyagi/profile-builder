import NavMenu from "../nav-menu/navMenu";
import "./nav.scss";

function Nav() {
  return (
    <div className="sideNav">
      <aside className="nav d-flex">
        <div className="card">
          <div className="card-head">
            <div className="head-content d-flex flex-column align-center">
              <img className="profile-image" src="./passport_photo.jpg" />
              <p className="profile-name text-center">Suryakant Tyagi</p>
            </div>
            <div className="h-line"></div>
          </div>
          <div class="card-body">
            
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Nav;
