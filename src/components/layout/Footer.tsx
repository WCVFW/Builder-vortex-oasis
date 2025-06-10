import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Impact Stories", href: "/impact" },
    { name: "Get Involved", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ];

  const programs = [
    { name: "Education Support", href: "/programs#education" },
    { name: "Career Development", href: "/programs#career" },
    { name: "Health & Wellness", href: "/programs#health" },
    { name: "Leadership Training", href: "/programs#leadership" },
    { name: "Mentorship", href: "/programs#mentorship" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for updates on our programs, success
              stories, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="btn-primary whitespace-nowrap">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-empowerment-500 to-hope-500">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Women's Foundation</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering women and girls through education, leadership
              development, and community support. Building a future where every
              woman has the opportunity to thrive.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-empowerment-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-empowerment-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-gray-300 hover:text-hope-400 transition-colors duration-200"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-empowerment-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Foundation Drive
                  <br />
                  Empowerment City, EC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-hope-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-growth-400 flex-shrink-0" />
                <span className="text-gray-300">info@womensfoundation.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Women's Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
