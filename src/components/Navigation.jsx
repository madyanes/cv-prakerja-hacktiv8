import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className='wrapper'>
        <ul>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/education'>Education</Link>
          </li>
          <li>
            <Link to='/expertise'>Expertise</Link>
          </li>
          <li>
            <Link to='/experience'>Experience</Link>
          </li>
          <li>
            <Link to='/interest'>Interest</Link>
          </li>
          <li>
            <Link to='/award'>Award</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
