import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiDjango,
  SiNextdotjs,
} from 'react-icons/si';

function Expertise() {
  return (
    <article>
      <header>
        <h1>Expertise</h1>
      </header>
      <div id='section-group-grid'>
        <section className='section-group-item li-icon-only li-bordered'>
          <h1>Programming</h1>
          <ul>
            <li>
              <SiJavascript />
            </li>
            <li>
              <SiPython />
            </li>
          </ul>
        </section>
        <section className='section-group-item li-icon-only li-bordered'>
          <h1>Markup</h1>
          <ul>
            <li>
              <SiHtml5 />
            </li>
            <li>
              <SiCss3 />
            </li>
          </ul>
        </section>
        <section className='section-group-item li-icon-only li-bordered'>
          <h1>Technologies</h1>
          <ul>
            <li>
              <SiReact />
            </li>
            <li>
              <SiSass />
            </li>
          </ul>
        </section>
        <section className='section-group-item li-icon-only li-bordered'>
          <h1>Frameworks</h1>
          <ul>
            <li>
              <SiNextdotjs />
            </li>
            <li>
              <SiDjango />
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Expertise;
