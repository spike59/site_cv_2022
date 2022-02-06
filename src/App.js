import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import {FallbackComponent} from './components/fallbackComponent';
import cvHeadData from './data/head.json';
import cvProfilData from './data/profil.json';
import cvSkillsData from './data/skills.json';
import cvFormationsData from './data/formations.json';
import cvExperiencesData from './data/experiences.json';
import cvLoisirsData from './data/loisirs.json';

const cvData = {
  "head":cvHeadData,
  "profil":cvProfilData,
  "skills":cvSkillsData,
  "experiences":cvExperiencesData,
  "formations":cvFormationsData,
  "loisirs":cvLoisirsData
}

const HomePage = React.lazy(() => import('./components/pages/home/home_page'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackComponent />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage {...cvData}/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
