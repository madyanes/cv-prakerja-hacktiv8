import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';

function About() {
  return (
    <article id='about'>
      <header>
        <h1>About</h1>
      </header>
      <table>
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
