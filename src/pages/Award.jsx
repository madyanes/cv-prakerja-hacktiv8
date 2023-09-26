import { getCertificates } from '../utils/certificates';

function Award() {
  return (
    <article id='award'>
      <header>
        <h1>Awards</h1>
      </header>
      <ul>
        {getCertificates().map((certificate, index) => (
          <li key={index}>
            <a target='_blank' href={certificate.link} rel='noreferrer'>
              <img src={certificate.filepath} alt={certificate.name} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Award;
