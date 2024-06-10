import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scroll > window.innerHeight * 0.5 ? 'scrolled' : ''}`}>
        <h2 className='navbar__heading'>StrengthSphere</h2>
        <FontAwesomeIcon icon={faBars} />
    </nav>
  )
}

export default Navbar