import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Mite Li</h2>
        <p><a href="mailto:a86056549@gmail.com">a86056549@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mite. I am currently working as a
        machine learning engineer (NLP) in Beijing, China.
        I received my Master&apos;s degree in Computer Science
        from the University of Sheffield, UK, in 2021.
        I&apos;m interested in the application and infrastructure
        of NLP (Natural Language Processing)
        technology, such as LLMs and MLOps.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mite Li.</p>
    </section>
  </section>
);

export default SideBar;
