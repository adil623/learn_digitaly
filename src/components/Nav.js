import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  let navbarClasses = [
    'navbar',
    'navbar-default',
    'navbar-fixed-top',
    'affix-top',
  ];
  if (scrolled) {
    navbarClasses.pop('affix-top');
    navbarClasses.push('affix');
  }

  return (
    <nav id='mainNav' className={navbarClasses.join(' ')}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <img src='img/icons/menu.png' alt='menu' width='40' />{' '}
          </button>
          <a className='navbar-brand' href='index-2.html'>
            <img className='logo-change' src='img/logo-green.png' alt='logo' />
          </a>{' '}
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li className='active'>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/Home/About'> About Us </Link>
            </li>

            <li>
              <Link to='/Home/Articles'> Articles </Link>
            </li>

            <li className='dropdown'>
              <a
                href='pages.html'
                className='dropdown-toggle'
                data-toggle='dropdown'
              >
                Pages <i className='fa fa-angle-down' aria-hidden='true'></i>
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a href='about.html'>About Us</a>
                </li>
                <li>
                  <a href='course.html'>Courses</a>
                </li>
                <li>
                  <a href='single-course.html'>Single Course</a>
                </li>
                <li>
                  <a href='apply-course.html'>Application</a>
                </li>
                <li>
                  <a href='gallery.html'>Gallery</a>
                </li>
                <li>
                  <a href='404.html'>404 page</a>
                </li>
                <li>
                  <a href='login.html'>Login</a>
                </li>
                <li>
                  <a href='register.html'>Register</a>
                </li>
                <li>
                  <a href='faq.html'>Faq</a>
                </li>
                <li>
                  <a href='contact-one.html'>Contact One</a>
                </li>
                <li>
                  <a href='contact-two.html'>Contact Two</a>
                </li>
                <li>
                  <a href='terms-and-conditions.html'>Terms and Conditions</a>
                </li>
                <li>
                  <a href='privacy-policy.html'>Privacy Policy</a>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a
                href='blog.html'
                className='dropdown-toggle'
                data-toggle='dropdown'
              >
                Blog <i className='fa fa-angle-down' aria-hidden='true'></i>
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a href='blogs.html'>Blogs</a>
                </li>
                <li>
                  <a href='blog-single.html'>Blog Single</a>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a
                href='contact.html'
                className='dropdown-toggle'
                data-toggle='dropdown'
              >
                Contact <i className='fa fa-angle-down' aria-hidden='true'></i>
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a href='contact-one.html'>Contact One</a>
                </li>
                <li>
                  <a href='contact-two.html'>Contact Two</a>
                </li>
              </ul>
            </li>
            <li className='search-icon'>
              <a href='javascript:void(0)'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </a>
              <div className='search-form'>
                <form className='navbar-form' role='search'>
                  <div className='input-group add-on'>
                    <input
                      className='form-control'
                      placeholder='Search'
                      name='srch-term'
                      id='srch-term'
                      type='text'
                    />
                    <div className='input-group-btn'>
                      <button className='btn btn-default' type='submit'>
                        <i className='glyphicon glyphicon-search'></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
