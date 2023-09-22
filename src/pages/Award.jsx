import certDicodingDasarPemrogramanWeb from '../assets/certificates/belajar-dasar-pemrograman-web.png';
import certDicodingDasarPemrogramanJavascript from '../assets/certificates/belajar-dasar-pemrograman-javascript.png';
import certDicodingBelajarMembuatFrontEndWebPemula from '../assets/certificates/belajar-membuat-front-end-web-pemula.png';
import certDicodingBelajarAplikasiWebReact from '../assets/certificates/belajar-membuat-aplikasi-web-dengan-react.png';
import certDicodingMemulaiPemrogramanDart from '../assets/certificates/memulai-pemrograman-dengan-dart.png';
import certDicodingBelajarFundamentalAplikasiWebReact from '../assets/certificates/belajar-fundamental-aplikasi-web-react.png';

function Award() {
  return (
    <article id='award'>
      <header>
        <h1>Awards</h1>
      </header>
      <ul>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/1RXY6DW6QZVM'
            rel='noreferrer'
          >
            <img
              src={certDicodingDasarPemrogramanWeb}
              alt='Belajar Dasar Pemrograman Web'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/72ZD8DWO9ZYW'
            rel='noreferrer'
          >
            <img
              src={certDicodingDasarPemrogramanJavascript}
              alt='Belajar Dasar Pemrograman JavaScript'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/MRZMQR290PYQ'
            rel='noreferrer'
          >
            <img
              src={certDicodingBelajarMembuatFrontEndWebPemula}
              alt='Belajar Membuat Front-End Web untuk Pemula'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/JLX1DJRVNZ72'
            rel='noreferrer'
          >
            <img
              src={certDicodingBelajarAplikasiWebReact}
              alt='Belajar Membuat Aplikasi Web dengan React'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/MRZMQ03Q0PYQ'
            rel='noreferrer'
          >
            <img
              src={certDicodingMemulaiPemrogramanDart}
              alt='Memulai Pemrograman dengan Dart'
            />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://www.dicoding.com/certificates/4EXGN03VQZRL'
            rel='noreferrer'
          >
            <img
              src={certDicodingBelajarFundamentalAplikasiWebReact}
              alt='Belajar Fundamental Aplikasi Web dengan React'
            />
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Award;
