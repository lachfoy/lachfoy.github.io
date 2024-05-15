import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className='nav'>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/oldprojects">Projects</Link>
      {/* <Link className='nav-link' to="/about">About</Link> */}
      {/* <Link className='nav-link' to="/contact">Contact</Link> */}
    </nav>
  );
}

