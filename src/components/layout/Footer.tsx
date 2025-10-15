import { Link } from "react-router-dom";
import { Code, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-lg border-t border-gray-200/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/19e7d7c3-f20b-40b3-8894-e9d0917b3e7b.png" 
                alt="Fitville Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-gray-800">Fitville</span>
                <p className="text-xs text-gray-600">Digital Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We build the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors hover-lift">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors hover-lift">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors hover-lift">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-headline">Services</h3>
            <div className="space-y-2">
              <Link to="/programs" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                UI/UX Design
              </Link>
              <Link to="/programs" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Web Development
              </Link>
              <Link to="/programs" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Mobile Apps
              </Link>
              <Link to="/programs" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Custom Software
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-headline">Industries</h3>
            <div className="space-y-2">
              <Link to="/industries" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Healthcare
              </Link>
              <Link to="/industries" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                E-commerce
              </Link>
              <Link to="/industries" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Finance
              </Link>
              <Link to="/industries" className="block text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                Education
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-headline">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-600 font-medium">1-612-961-8749</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-600 font-medium">fitville12@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-600 font-medium">Lakeville, MN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 font-medium">
              © 2024 Fitville. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};