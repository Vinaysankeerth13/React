import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We're happy to answer any questions you may have. Feel free to reach out
        using the information below.
      </p>
      <h2>Contact Information</h2>
      <ul>
        <li>
          <span className="contact-us__label">Address:</span> Gurukul Marg,
          HSR Layout, Bangalore - 560068, India
        </li>
        <li>
          <span className="contact-us__label">Phone:</span> +91 80 1234 5678
        </li>
        <li>
          <span className="contact-us__label">Email:</span>{' '}
          <a href="mailto:support@foodie.com">support@foodie.com</a>
        </li>
      </ul>
      <h2>Social Media</h2>
      <ul className="contact-us__social">
        <li>
          <a href="#">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href="#">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a href="#">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;

