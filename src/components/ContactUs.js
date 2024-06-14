import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="contact-us m-2 p-5 bg-white rounded-md shadow-md border border-green-500 justify-between">
      <h1 className='font-bold text-2xl p-3'>Contact Us</h1>
      <p className='p-3'>
        We're happy to answer any questions you may have. Feel free to reach out
        using the information below.
      </p>
      <h2 className='font-semibold p-3'>Contact Information</h2>
      <ul>
        <li>
          <span className="contact-us__label p-3">Address:</span> Gurukul Marg,
          HSR Layout, Bangalore - 560068, India
        </li>
        <li>
          <span className="contact-us__label p-3">Phone:</span> +91 80 1234 5678
        </li>
        <li>
          <span className="contact-us__label p-3">Email:</span>{' '}
          <a href="mailto:support@foodie.com">support@foodie.com</a>
        </li>
      </ul>
      <h2 className='font-semibold p-3'>Social Media</h2>
      <ul className="contact-us__social p-3 flex justify-between">
        <li>
          <a href="# px-2">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href="# px-2">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a href="# px-2">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;

