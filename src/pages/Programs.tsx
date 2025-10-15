import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Smartphone, Cog, CheckCircle, ArrowRight } from "lucide-react";
import { QuoteModal } from "@/components/modals/QuoteModal";

const Programs = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleGetQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setShowQuoteModal(true);
  };
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing", "Mobile-First Design", "Accessibility Compliance"],
      price: "Starting from $1,000",
      timeline: "1-2 weeks"
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Modern, scalable web applications built with cutting-edge technology",
      features: ["React/Next.js Development", "Backend API Development", "Database Design", "Cloud Deployment", "Performance Optimization", "SEO Implementation"],
      price: "Starting from $1,600",
      timeline: "2-4 weeks"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: ["React Native Development", "Flutter Applications", "App Store Deployment", "Push Notifications", "Offline Functionality", "App Analytics"],
      price: "Starting from $2,400", 
      timeline: "3-6 weeks"
    },
    {
      icon: Cog,
      title: "Custom Software",
      description: "Tailored enterprise solutions for complex business requirements",
      features: ["Business Process Automation", "Integration APIs", "Custom Dashboards", "Data Analytics", "Cloud Infrastructure", "24/7 Support"],
      price: "Starting from $3,000",
      timeline: "4-8 weeks"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2">Our Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Digital Solutions</span> That Drive Results
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.timeline}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button 
                      className="hover-glow"
                      onClick={() => handleGetQuote(service.title)}
                    >
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
        serviceType={selectedService}
      />
    </div>
  );
};

export default Programs;