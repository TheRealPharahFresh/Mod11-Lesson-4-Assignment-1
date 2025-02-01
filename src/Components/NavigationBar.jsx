import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'><Link to='/'>HomePage</Link></li>
        <li className='nav-item'><Link to='/characters'>Character Browsing</Link></li>
        <li className='nav-item'><Link to='/comics'>Comics</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
