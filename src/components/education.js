import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// logos (adjust paths if yours differ)
import csulbLogo from '../assets/img/csulb.png';
import aditLogo from '../assets/img/adit.jpeg';

const EDUCATION = [
  {
    school: 'California State University, Long Beach',
    degree: 'Master of Science (MS), Computer Science',
    location: 'Long Beach, CA, USA',
    period: 'Aug 2025 – Aug 2027',
    logo: csulbLogo,
    link: 'https://www.csulb.edu/',
    highlights: ['Graduate study in Computer Science.'],
  },
  {
    school: 'A D Patel Institute of Technology, CVM University',
    degree: 'Bachelor of Engineering (BE), Information Technology',
    location: 'Anand, Gujarat, India',
    period: 'Oct 2021 – May 2025',
    logo: aditLogo,
    link: 'https://www.adit.ac.in/',
    highlights: ['Grade: 8.23 / 10'],
  },
];

export default function Education() {
  return (
    <section className="edu-section" id="education">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeInUp' : ''}>
                  <h2 className="edu-title">Education</h2>
                  <p className="edu-subtitle">A snapshot of my academic journey.</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row className="gy-4 edu-timeline">
          {EDUCATION.map((item, idx) => (
            <Col key={idx} xs={12}>
              <TrackVisibility once partialVisibility>
                {({ isVisible }) => (
                  <article
                    className={`edu-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                    aria-label={`${item.school} – ${item.degree}`}
                  >
                    <div className="edu-dot" aria-hidden />
                    <div className="edu-line" aria-hidden />

                    <div className="edu-logo-wrap">
                      <img
                        src={item.logo}
                        alt={`${item.school} logo`}
                        className="edu-logo"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="edu-content">
                      <header className="edu-header">
                        <h3 className="edu-school">
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noreferrer">{item.school}</a>
                          ) : item.school}
                        </h3>
                        <span className="edu-period">{item.period}</span>
                      </header>

                      <div className="edu-meta">
                        <span className="edu-degree">{item.degree}</span>
                        {item.location ? <span className="edu-location"> · {item.location}</span> : null}
                      </div>

                      {!!item.highlights?.length && (
                        <ul className="edu-highlights">
                          {item.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                        </ul>
                      )}
                    </div>
                  </article>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
