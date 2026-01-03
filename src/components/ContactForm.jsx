import React from 'react';
import Form from 'react-bootstrap/Form';
import { useFormData } from '../hook/useFormData';
import { Send } from 'lucide-react';

function ContactForm() {
  const { formData, handleChange, sendEmail } = useFormData();

  return (
    <Form onSubmit={(e)=>sendEmail(e)} className="m-5 p-3 contact-form">
      <h5 className='form-title'>Get in Touch</h5>
      <Form.Group className="m-3 " controlId="formName">
        <Form.Control name="name" value={formData.name} onChange={(e)=>handleChange("name",e.target.value)} className="text-white bg-dark" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Control name="email" value={formData.email} onChange={(e)=>handleChange("email",e.target.value)} className="text-white bg-dark" type="email" placeholder="Your Email" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formSubject">
        <Form.Control name="subject" value={formData.subject} onChange={(e)=>handleChange("subject",e.target.value)} className="text-white bg-dark" type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control name="message" value={formData.message} as="textarea" onChange={(e)=>handleChange("message",e.target.value)} className="text-white bg-dark" rows={5} placeholder='Your message'/>
      </Form.Group>
      <button style={{width:"95%"}}  className="m-3 pt-2 pb-2 rounded mr-3 send-button" type="submit">
        Send Message <Send/> 
      </button>
    </Form>
  )
}

export default ContactForm;