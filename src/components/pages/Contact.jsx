import { useState } from 'react';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'message':
        setMessage(value)
        break;
      default:
        console.error('key not found!')
        break;
    }

    return value;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>
        Contact Me
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
