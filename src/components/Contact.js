import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [submitting, setSubmitting] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side guardrails (optional)
    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      toast.error('Please fill in First Name, Email, and Message.', { position: 'top-center' });
      return;
    }

    setSubmitting(true);
    setButtonText('Sending...');

    const payload = {
      name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
      email: formDetails.email,
      message: formDetails.message,
      phone: formDetails.phone
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Try to parse JSON; if it fails, fall back to text
      let data;
      try {
        data = await res.json();
      } catch {
        const txt = await res.text();
        data = { error: txt || 'Unexpected response from server' };
      }

      if (res.ok && (data?.ok || !data?.error)) {
        toast.success('Message sent successfully!', {
          position: 'top-center',
          style: { maxWidth: '300px' }
        });

        // If you enabled Ethereal in your local Function, you might get a previewUrl
        if (data.previewUrl) {
          console.log('Ethereal preview URL:', data.previewUrl);
        }

        // Reset form
        setFormDetails(formInitialDetails);
      } else {
        const reason = data?.error || 'Something went wrong, please try again later.';
        toast.error(reason, { position: 'top-center' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      toast.error('Network error. Please try again later.', { position: 'top-center' });
    } finally {
      setSubmitting(false);
      setButtonText('Send');
    }
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.firstName}
                          placeholder='First Name'
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.lastName}
                          placeholder='Last Name'
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>

                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          value={formDetails.email}
                          placeholder='Email Address'
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          value={formDetails.phone}
                          placeholder='Phone No.'
                          maxLength='10'
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>

                      <Col size={12} className='px-1'>
                        <textarea
                          rows='6'
                          value={formDetails.message}
                          placeholder='Message'
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>

                        <button type='submit' disabled={submitting}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </section>
  );
};
