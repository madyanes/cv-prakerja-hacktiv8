import {
  TfiEmail,
  TfiLinkedin,
  TfiGithub,
  TfiTwitterAlt,
} from 'react-icons/tfi';

import photo from '../assets/images/photo.jpg';

function Header() {
  return (
    <header>
      <div className='wrapper center'>
        <figure>
          <img className='photo' src={photo} alt='My photo' />
        </figure>
        <div>
          <div id='summary'>
            <h1>Madyan Eka Septian</h1>
            <p className='jobdesc'>React Developer</p>
          </div>
          <address>
            <a href='mailto:madyanes.dev@gmail.com'>
              <TfiEmail />
            </a>
            <a
              href='https://www.linkedin.com/in/madyanes'
              target='_blank'
              rel='noreferrer'
            >
              <TfiLinkedin />
            </a>
            <a
              href='https://github.com/madyanes'
              target='_blank'
              rel='noreferrer'
            >
              <TfiGithub />
            </a>
            <a
              href='https://twitter.com/madyanes700'
              target='_blank'
              rel='noreferrer'
            >
              <TfiTwitterAlt />
            </a>
          </address>
        </div>
      </div>
    </header>
  );
}

export default Header;
