import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Zap } from "lucide-react";
import { BookConsultationModal } from "@/components/modals/BookConsultationModal";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/programs" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-gray-200/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-scale">
              <img 
                src="/lovable-uploads/19e7d7c3-f20b-40b3-8894-e9d0917b3e7b.png" 
                alt="Fitville Logo" 
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-800">Fitville</span>
                <p className="text-xs text-gray-600">Digital Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`story-link transition-colors font-medium ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="sm"
                onClick={() => setShowBookingModal(true)}
                className="btn-premium animate-glow-pulse-premium"
              >
                Book Consultation
              </Button>
              <Button asChild size="sm" className="btn-premium animate-glow-pulse-premium">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 bg-white border-t border-gray-200/30 animate-fade-in-premium">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-md transition-colors font-medium ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setShowBookingModal(true);
                      setIsOpen(false);
                    }}
                    className="w-full btn-premium"
                  >
                    Book Consultation
                  </Button>
                  <Button asChild size="sm" className="w-full btn-premium">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookConsultationModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
      />
    </>
  );
};