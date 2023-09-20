import { Routes, Route } from 'react-router-dom';

import Education from '../pages/Education';
import Expertise from '../pages/Expertise';
import Experience from '../pages/Experience';
import About from '../pages/About';
import Interest from '../pages/Interest';
import Award from '../pages/Award';

function Main() {
  return (
    <main>
      <div>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/expertise' element={<Expertise />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/interest' element={<Interest />} />
          <Route path='/award' element={<Award />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
