import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isHover, setIsHover] = useState(true);

  const changeHeadingColors = (e) => {
    setIsHover(!isHover);
  };

  return (
    <div>
      <header className='inner'>
        {/*<!-- Banner --> */}
        <div className='header-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <h1 id='homeHeading'>
                  <Link to='/Home/About'>About Us</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Company Profile */}
      <section
        onMouseEnter={changeHeadingColors}
        onMouseLeave={changeHeadingColors}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2
                className={'para-heading'}
                style={isHover ? { color: '#5dc560' } : { color: '#555555' }}
              >
                About - Learn Digitally
              </h2>
              <h3>Get Academicly Smarter!</h3>
              <p>
                We help Elementary, Secondary, Intermediate, Undergraduate and
                Graduate learners to excel academically with resources that suit
                their learning styles. You will have access to a resourceful
                online classNameroom, assignments, a diverse range of study
                materials, online assessments and discussion board. We have a
                separate section for our elementary learners where we highly
                encourage them to read, write, get their stories featured on
                this website and earn a free certificate on the successful
                completion of our reading resources.
              </p>
              <h3>Build your self professionally and Personally!</h3>
              <p>
                With our series of courses, certifications, lectures,
                informative videos and study materials, you will learn the
                skills needed to excel in the job market of future, prepare for
                your career, upgrade yourself professionally with on-demand
                T&amp;D courses, obtain certificates, and all at your own pace!
              </p>
              <p>
                We firmly believe in personal development too, and so we feature
                courses and articles on self-help, including soft skills needed
                to succeed in 21st century. As learners exercise their mental
                muscle with us, they:
              </p>
              <ul>
                <li
                  style={isHover ? { color: '#5dc560' } : { color: '#555555' }}
                >
                  Pursue Cognitive Development
                </li>
                <li
                  style={isHover ? { color: '#5dc560' } : { color: '#555555' }}
                >
                  Upskill themselves in their career
                </li>
                <li
                  style={isHover ? { color: '#5dc560' } : { color: '#555555' }}
                >
                  Succeed in personal life and relationshipa.
                </li>
              </ul>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality transformative learning experience to
                everyone online.
              </p>
              <h2
                className={'para-heading'}
                style={isHover ? { color: '#5dc560' } : { color: '#555555' }}
              >
                Our Values
              </h2>
              <h3>Collabration &amp; Respect</h3>
              <p>
                We prize a culture of participation and collaboration. We
                respect and appreciate individual differences as they are part
                of our strength as a team.
              </p>
              <h3>Innovation &amp; Adoptablity</h3>
              <p>
                We foster a continuous learning culture that inspires creativity
                and innovation, allowing us to adopt and thrive in a growing
                global community.
              </p>
              <h3>Leadership &amp; Empowerment</h3>
              <p>
                We encourage leading by example, and empower our employees to
                make the right decisions, instilling a strong sense of
                confidence and corporate responsibility.
              </p>
              <p></p>
            </div>
            <div className='col-md-6'>
              {' '}
              <img
                src='../img/students.jpg'
                className='img-responsive img-hide-sm'
                alt='Company'
              />{' '}
            </div>
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className='light-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading'>Associated Companies</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                neque erat, ultrices cursus nisi at, hendrerit tristique.
              </p>
              <div className='template-space'></div>
            </div>
            {/*<!-- Clients -->*/}
            <div className='col-md-12 client-box'>
              <div className='client-single'>
                {' '}
                <img src='../img/clients/1.png' alt='icon' />
              </div>
              <div className='client-single'>
                {' '}
                <img src='../img/clients/2.png' alt='icon' />
              </div>
              <div className='client-single'>
                {' '}
                <img src='../img/clients/3.png' alt='icon' />
              </div>
              <div className='client-single'>
                {' '}
                <img src='../img/clients/4.png' alt='icon' />
              </div>
              <div className='client-single'>
                {' '}
                <img src='../img/clients/5.png' alt='icon' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading text-dark'>
                Our Talented Trainers
              </h2>
              <div className='template-space'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <aside className='dark-bg aside-cta'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-sm-12 col-xs-12'>
              <h3 className='margin-10 text-white cta-heading'>
                Are you Looking for good Trainer?
              </h3>
              <a href='javascript:void(0)' className='template-button'>
                <i className='fa fa-angle-double-right' aria-hidden='true'></i>{' '}
                Contact Now
              </a>{' '}
            </div>
          </div>
        </div>
      </aside>
      {/* /Call To Action */}
    </div>
  );
};

export default About;
