import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import screen from '../assets/images/NEWTITLE.png';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>{config.subHeading}</p>
        <ul className="actions">
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.MysticTear.mystictearapp"
              className="button primary icon fa-download"
              target="_blank"
            >
              Download in Google Play Store
            </a>
          </li>
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button icon fa-chevron-down">
                Learn More
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>

    <section id="one" className="wrapper style2 special">
      <header className="major">
        <h2>
          The Unicorn Overlord opened a rift into our universe and let loose all
          kinds of creatures into our world.
          <br />
          ✨
          <br />
          Collect the invading creatures and work with them to defeat the
          Unicorn and his minions, send them back to their universe and close
          the rift!
        </h2>
      </header>
    </section>

    <section id="two" className="wrapper">
      <div className="inner alt">
        <section className="spotlight">
          <h2>Meet the Creators of Mystic Tear</h2>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h3>Roger Voss</h3>
            <p>
              AR and Battlemaster extraordinaire!
              <br />
              <br />
              Get in touch:
              <br />
              <a href="https://github.com/rogerrogerv" target="_blank">
                GitHub
              </a>
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h3>Kohki Shiga</h3>
            <p>
              AR and Firebase Guru!
              <br />
              <br />
              Get in touch:
              <br />
              <a href="https://github.com/Saggitarie" target="_blank">
                GitHub
              </a>
              <br />
              <a href="https://twitter.com/KohkiShiga" target="_blank">
                Twitter
              </a>
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h3>Julia Kyung</h3>
            <p>
              UI Visionary and Illustrator!
              <br />
              <br />
              Get in touch:
              <br />
              <a href="https://github.com/JuliaKyung" target="_blank">
                GitHub
              </a>
              <br />
              <a href="https://instagram.com/missmaeko" target="_blank">
                Instagram
              </a>
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic4} alt="" />
          </div>
          <div className="content">
            <h3>Halee Pagel</h3>
            <p>
              Tech Lead and UI Builder!
              <br />
              <br />
              Get in touch:
              <br />
              <a href="https://github.com/haleepagel" target="_blank">
                GitHub
              </a>
              <br />
              <a href="https://instagram.com/haleepagel" target="_blank">
                Instagram
              </a>
              <br />
              <a href="https://twitter.com/haleepagel" target="_blank">
                Twitter
              </a>
            </p>
          </div>
        </section>
        {/* <section className="special">
          <ul className="icons labeled">
            <li>
              <span className="icon fa-camera-retro">
                <span className="label">Ipsum lorem accumsan</span>
              </span>
            </li>
            <li>
              <span className="icon fa-refresh">
                <span className="label">Sed vehicula elementum</span>
              </span>
            </li>
            <li>
              <span className="icon fa-cloud">
                <span className="label">Elit fusce consequat</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">Lorem nullam tempus</span>
              </span>
            </li>
            <li>
              <span className="icon fa-desktop">
                <span className="label">Adipiscing amet sapien</span>
              </span>
            </li>
          </ul>
        </section> */}
      </div>
    </section>

    {/* <section id="three" className="wrapper style2 special">
      <header className="major">
        <h2>Elements Page</h2>
        <p>This starter is included with Elements demo for the starter</p>
      </header>
      <ul className="actions special">
        <li>
          <Link to="/Elements" className="button primary icon fa-plus">
            Check Elements
          </Link>
        </li>
      </ul>
    </section> */}

    <Footer />
  </Layout>
);

export default IndexPage;
