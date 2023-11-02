
import React from 'react';
import './App.css';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section className="portfolio">
        <div className="portfolio-item">
          <h2>Project 1</h2>
          <p>Description</p>
        </div>
        <div className="portfolio-item">
          <h2>Project 2</h2>
          <p>Description</p>
        </div>
        <div className="portfolio-item">
          <h2>Project 3</h2>
          <p>Description</p>
        </div>
      </section>
      <section className="about">
        <h2>About Me</h2>
        <p>Hi, I'm Nandana V. I'm a Web Developer based in Chennai.</p>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: nandanav@example.com</p>
        <p>Phone: 0123456789</p>
      </section>
    </div>
 );
}

export default App;