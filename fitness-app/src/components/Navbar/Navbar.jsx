import './Navbar.scss';
import logo from '../../assets/logo/dumbbell-color-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='navbar__logo' src={logo} alt="logo" />
        <FontAwesomeIcon icon={faBars} />
    </div>
  )
}

export default Navbar