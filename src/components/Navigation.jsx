import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isActive, setIsActive] = useState('');

  const menu = [
    { id: '', name: 'About' },
    { id: 'education', name: 'Education' },
    { id: 'expertise', name: 'Expertise' },
    { id: 'experience', name: 'Experience' },
    { id: 'interest', name: 'Interest' },
    { id: 'award', name: 'Award' },
  ];

  const selectMenu = (page) => {
    setIsActive(page);
  };

  return (
    <nav>
      <div className='wrapper center'>
        <ul>
          {menu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={`/${menu.id}`}
                className={menu.id === isActive ? 'active' : ''}
                onClick={() => selectMenu(menu.id)}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
