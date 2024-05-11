import React, { useState } from 'react';
import WithLayout from '../../hoc';
import { Form } from 'react-bootstrap';
import './SendingEmailPage.scss';
import axios from 'axios'; // Import axios for making HTTP requests

const SendingEmailPage = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    subject: '',
    context: ''
  });

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email data:', emailData);
    try {
      await axios.post('/send-email', emailData); // Assuming you have a server route '/send-email'
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <>
      <div className="sending-email-outer">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={emailData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject here.." value={emailData.subject} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="context">
            <Form.Label>Context</Form.Label>
            <Form.Control as="textarea" rows={6} value={emailData.context} onChange={handleChange} />
          </Form.Group>
          <button type="submit" className="btn btn-primary">Send</button>
        </Form>
      </div>
    </>
  );
};

export default WithLayout(SendingEmailPage);
