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
            <p className='summary'>
              I am a passionate web technology enthusiast with a primary focus
              on web development using JavaScript and the React library. I am
              also actively learning TypeScript to enhance my skills in web
              application development. Currently, I am honing my expertise in
              building responsive and dynamic web applications. I have
              experience in developing various simple web projects utilizing
              JavaScript and React, and I am dedicated to continuous learning
              and growth in the field of web development.
            </p>
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
