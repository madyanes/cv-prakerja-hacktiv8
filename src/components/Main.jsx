import { Routes, Route } from 'react-router-dom';

import Education from '../pages/Education';
import Expertise from '../pages/Expertise';
import Experience from '../pages/Experience';

function Main() {
  return (
    <main>
      <div>
        <Routes>
          <Route path='/' element={<Education />} />
          <Route path='/expertise' element={<Expertise />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
