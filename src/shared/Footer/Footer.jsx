import logo from '../../../public/assets/logo/logo.png'
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='footer-desktop'>
                <div className='footer-left-content'>
                    <p className='footer-logo'>
                        <img className='w-[150px] h-[150px]' src={logo} alt="" />
                    </p>
                    <p id='call-us'>
                        Call us for any question: <br /> <span> +88 01704206969</span>
                    </p>
                    <p> Level-5, 34, Awal Centre, Banani, Dhaka</p>
                    <p>yourdomain@info.com</p>
                    <div className='footer-social-icons'>
                        <FaFacebook className="social-icon" />
                        <FaInstagram className="social-icon"/>
                        <FaTwitter className="social-icon"/>
                        <FaLinkedin className="social-icon"/>
                    </div>
                    <p>© {year} iRepair. Privacy Policy</p>
                </div>
                <div className='footer-right-content mt-32'>
                    <h1 className='text-black'>Subscribe to Newsletter</h1>
                    <p>Sign up for our e-mail and be the first to know about our special offers!</p>

                    <div className='footer-input'>
                        <input type='text' placeholder='Enter your E-mail' />
                        <button>Subscribe</button>
                    </div>
                    {/* <div className='footer-link-container backdrop-blur-sm'>
                        <div>
                            <ul>
                                <li>Who we are</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>News</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li>Laptop Repair / Computer Repair</li>
                                <li>Cleaning Laptops / Replacing Thermal Paste</li>
                                <li>Data Recovery</li>
                                <li>OS Installation</li>
                                <li>Assembling a Personal Computer at Home</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </footer>
            <footer className='footer-mobile'>
                <p>© {year} iRepair. Privacy Policy</p>
            </footer>
        </>
    );
};

export default Footer;