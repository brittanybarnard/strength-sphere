import './Navbar.scss';
import logo from '../../assets/logo/dumbbell-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* <img className='navbar__logo' src={logo} alt="logo" /> */}
        <h2 className='navbar__heading'>StrengthSphere</h2>
        <FontAwesomeIcon icon={faBars} />
    </nav>
  )
}

export default Navbar