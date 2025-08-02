/* eslint-disable no-irregular-whitespace */
import { NavLink } from 'react-router-dom';
import { footerLinks, footerLegalLinks, footerContactInfo, footerSocials } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg text-text py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

        {/* Brand & Mission */}
        <div>
          <h3 className="text-4xl font-extrabold mb-4 text-text">EmmyCode.</h3>
          <p className="text-sm leading-relaxed mb-4 text-text/80">
            Building beautiful and functional websites with passion and precision. Located in Lekki, Lagos, we turn your digital dreams into reality.
          </p>
          <div className="flex space-x-4">
            {footerSocials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text hover:text-secondary transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-text/80">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href} className="hover:text-secondary transition-colors">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-text/80">
            {footerLegalLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.href} className="hover:text-secondary transition-colors">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-text/80">
            {footerContactInfo.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <item.icon className="text-secondary flex-shrink-0" />
                <a href={item.link} className="hover:text-secondary transition-colors">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
          <p className="text-sm mb-4 text-text/80">Stay up-to-date with our latest news and projects.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
            <label htmlFor="newsletter-email" className="sr-only">Email for newsletter signup</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-text bg-input-bg border border-line-color focus:outline-none focus:ring-2 focus:ring-secondary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-4 md:px-8 text-center text-sm mt-12 pt-8 border-t border-line-color">
        &copy; {currentYear} EmmyCode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;