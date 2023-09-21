import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';

function About() {
  return (
    <article id='about'>
      <header>
        <h1>About</h1>
      </header>
      <p className='summary'>
        I am a passionate web technology enthusiast with a primary focus on web
        development using JavaScript and the React library. I am also actively
        learning TypeScript to enhance my skills in web application development.
        Currently, I am honing my expertise in building responsive and dynamic
        web applications. I have experience in developing various simple web
        projects utilizing JavaScript and React, and I am dedicated to
        continuous learning and growth in the field of web development.
      </p>
      <table>
        <tbody>
          <tr>
            <th>
              <FaUserAlt />
            </th>
            <td>Madyan Eka Septian</td>
          </tr>
          <tr>
            <th>
              <FaEnvelope />
            </th>
            <td>
              <a className='email' href='mailto:madyanes.dev@gmail.com'>
                madyanes.dev@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <th>
              <RiWhatsappFill />
            </th>
            <td>
              <a
                target='_blank'
                className='whatsapp'
                href='https://wa.me/628988889700'
                rel='noreferrer'
              >
                628988889700
              </a>
            </td>
          </tr>
          <tr>
            <th>
              <FaLocationDot />
            </th>
            <td>Kediri, East Java, Indonesia</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <p>
          This web application is the final project of the learning module{' '}
          <strong>
            &quot;Belajar Langkah Fundamental Untuk Menjadi Web Programmer&quot;
          </strong>{' '}
          by PT Hacktivate Teknologi Indonesia (Hacktiv8).
        </p>
      </footer>
    </article>
  );
}

export default About;
