import { faBars } from '@fortawesome/free-solid-svg-icons';
import { menuList } from '../../constants/navConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavMenu() {
    return (
        <div className="nav-menu right">
            <ul className="menu-list">
              {
                menuList.map((item, index) => {
                  return <li key={`list_${index}`}><a href="#">{item.name}</a></li>
                })
              }
            </ul>
            <ul className="hamburger">
              <li>
                <FontAwesomeIcon icon={faBars} />
              </li>
            </ul>
            <div>
            <div className="mobile d-none" id="mobileLinks">
              <ul>
              {
                menuList.map((item, index) => {
                  return <li key={`sm_list_${index}`}><a href="#">{item.name}</a></li>
                })
              }
              </ul>
            </div>
          </div>
          </div>
    )
}

export default NavMenu;