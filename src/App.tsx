import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import BookConsultation from "./pages/BookConsultation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { Chatbox } from "@/components/chat/Chatbox";
import { BackToTop } from "@/components/common/BackToTop";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <Chatbox />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
