import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Smartphone, Zap, Star, ArrowRight, CheckCircle, Globe, Wrench, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import fitvilleLogo from "@/assets/fitville-logo.png";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Design",
      description: "Responsive, modern websites tailored specifically for fitness professionals and gym businesses."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Your clients book sessions on-the-go. We ensure your site works perfectly on all devices."
    },
    {
      icon: Users,
      title: "Client Management Systems",
      description: "Integrated booking, scheduling, and client management tools to streamline your business."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading times that keep potential clients engaged and convert visitors to members."
    }
  ];

  const features = [
    "Online booking and scheduling",
    "Payment processing integration",
    "Client progress tracking",
    "Workout plan showcases",
    "Testimonial management",
    "SEO optimization",
    "Social media integration",
    "Analytics and reporting"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={fitvilleLogo} 
              alt="Fitville INC Logo" 
              className="h-12 w-auto"
            />
            <div>
              <span className="text-xl font-bold">Fitville INC</span>
              <p className="text-sm text-muted-foreground">Specialized in all small businesses!</p>
            </div>
          </div>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2">
            Grow Your Small Business With A Custom Made Website!
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Websites That Build Your Small Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create powerful, conversion-focused websites for all small businesses. 
            Turn your online presence into your biggest marketing asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Built for Busy Entrepreneurs!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique needs of business owners. Our solutions are crafted specifically for small business owners who want to substantially grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everything Your Small Business Needs</h2>
              <p className="text-muted-foreground mb-8">
                From client booking to payment processing, we build comprehensive solutions that handle every aspect of your online presence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Elite Fitness Studio</h3>
                      <p className="text-sm text-muted-foreground">Personal Training</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Our new website increased online bookings by 300% in the first month. The booking system is so easy for our clients to use!"
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Spark Electric Services</h3>
                      <p className="text-sm text-muted-foreground">Electrician</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The online booking system has revolutionized my business. Customers can schedule electrical services 24/7, and my revenue increased by 40%."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AquaFlow Plumbing</h3>
                      <p className="text-sm text-muted-foreground">Plumbing Services</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "My professional website gives customers confidence in my services. Emergency call bookings have tripled since going online."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Glamour Nails Studio</h3>
                      <p className="text-sm text-muted-foreground">Nail Salon</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "The appointment booking feature and gallery showcase have brought in so many new clients. My salon is now fully booked weeks in advance."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Small Business?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of small business owners who've grown their business with our custom websites.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={fitvilleLogo} 
                alt="Fitville INC Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold">Fitville INC</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Fitville INC. Founded by Joe Longueville. Building powerful websites for fitness professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
