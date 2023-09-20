import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className='wrapper'>
        <ul>
          <li>
            <Link to='/'>Education</Link>
          </li>
          <li>
            <Link to='/expertise'>Expertise</Link>
          </li>
          <li>
            <Link to='/experience'>Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
