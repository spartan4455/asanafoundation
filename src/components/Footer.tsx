import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Asana's Foundation" className="h-10 w-10" />
              <h3 className="font-heading font-bold text-lg">Asana's Foundation</h3>
            </div>
            <p className="font-body text-sm text-primary-foreground/90 mb-4">
              Putting smiles on the faces of orphans and vulnerable children through love, care, and support.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-secondary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-secondary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-secondary transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+233 544 684 526</span>
                <span>+233 242 600 143</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>asanasfoundation@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="font-body text-sm text-primary-foreground/90 mb-3">
              Subscribe to receive updates about our work and how you can help.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-heading font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body">
            <p className="text-primary-foreground/90">
              © 2026 Asana's Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-secondary fill-secondary" />
              <span>for children in need</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
