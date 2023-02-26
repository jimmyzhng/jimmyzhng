import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_5rb0gvl', 'template_kg8e9ro', refForm.current, 'pTriy6CfdSkH5cqEM')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for your message! It has been successfully sent.');
        window.location.reload(false);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send! Please try again.');
      });
  };


  return (<>

    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={`Contact me`.split('')} index={15} />
        </h1>

        <p>
          I am always happy to connect! Feel free to contact me with the form below, or shoot me a message on LinkedIn.
        </p>


        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder="Name" required />
              </li>

              <li className='half'>
                <input type='email' name='email' placeholder="Email" required />
              </li>

              <li>
                <input type='text' name='subject' placeholder="Subject" required />
              </li>

              <li>
                <textarea type='text' name='message' placeholder="Message" required />
              </li>

              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>


            </ul>
          </form>
        </div>
      </div>

    </div>
    <Loader type='pacman' />
  </>);
}