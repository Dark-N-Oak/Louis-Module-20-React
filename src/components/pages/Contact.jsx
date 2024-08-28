import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        if (!value) {
          setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
        break;
      case 'email':
        setEmail(value);
        if (value && !validateEmail(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
        break;
      case 'message':
        setMessage(value);
        if (!value) {
          setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        }
        break;
      default:
        console.error('key not found!');
        break;
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        if (!value) {
          setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
        }
        break;
      case 'email':
        if (value && !validateEmail(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
        }
        break;
      case 'message':
        if (!value) {
          setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
        }
        break;
      default:
        console.error('key not found!');
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      // Set errors for empty fields
      setErrors((prevErrors) => ({
        name: !name ? 'Name is required' : prevErrors.name,
        email: !email ? 'Email is required' : prevErrors.email,
        message: !message ? 'Message is required' : prevErrors.message,
      }));
      return;
    }

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      return;
    }

    // Form submission logic here
    console.log('Form submitted:', { name, email, message });

    // Clear form fields and errors
    setName('');
    setEmail('');
    setMessage('');
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Message"
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
