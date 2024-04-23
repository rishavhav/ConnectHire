import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <footer className="flex justify-between footer p-10 bg-primary-content text-accent-content">


                <nav >
                    <h6 className="footer-title">Links</h6>
                    <a className="link link-hover">About me</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div className="flex justify-center mt-5">
                    <a href="https://www.instagram.com/rishav_soam/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/rishav-goutam-soam/" target="_blank" rel="noopener noreferrer" className="link link-hover ml-4">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
