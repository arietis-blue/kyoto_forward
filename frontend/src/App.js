import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import './index.css';

function Home() {
  return <h2>ホーム</h2>;
}

function About() {
  return <h2>私について</h2>;
}

function Projects() {
  return <h2>プロジェクト</h2>;
}

function App() {
  return (
    <Router>
      <div className="bg-black h-screen flex flex-col">
        <header className="bg-orange-500 text-black font-bold p-5 flex items-center justify-between"> {/* ← flex, items-center, and justify-between added */}
          <h1 className="text-2xl">Kyoto Forward</h1>
          <nav>
            <ul className="flex space-x-4 ">
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/about">私について</Link>
              </li>
              <li>
                <Link to="/projects">プロジェクト</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-5 text-white">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-orange-500 text-black font-bold p-5">
          <p>© 2023 by Me. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}


export default App;
