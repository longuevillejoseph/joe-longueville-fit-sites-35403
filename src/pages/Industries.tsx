import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, DollarSign, GraduationCap, Home, Plane, Dumbbell, Briefcase, Factory } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient management systems, telemedicine platforms, and healthcare analytics",
      projects: "25+ Projects",
      features: ["HIPAA Compliance", "Patient Portals", "Appointment Scheduling", "Medical Records"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Online stores, marketplace platforms, and inventory management systems",
      projects: "40+ Projects", 
      features: ["Payment Integration", "Inventory Management", "Customer Analytics", "Mobile Commerce"]
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Banking apps, investment platforms, and financial management tools",
      projects: "15+ Projects",
      features: ["Security Standards", "Real-time Trading", "Portfolio Management", "Compliance Tools"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management systems, online courses, and educational apps",
      projects: "20+ Projects",
      features: ["LMS Development", "Video Streaming", "Progress Tracking", "Interactive Content"]
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property listings, virtual tours, and real estate management platforms",
      projects: "18+ Projects",
      features: ["Property Search", "Virtual Tours", "CRM Integration", "Market Analytics"]
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Booking platforms, travel apps, and hospitality management systems",
      projects: "12+ Projects",
      features: ["Booking Systems", "Payment Processing", "Review Management", "Mobile Apps"]
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness", 
      description: "Fitness apps, gym management systems, and wellness platforms",
      projects: "8+ Projects",
      features: ["Workout Tracking", "Membership Management", "Nutrition Planning", "Social Features"]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Business automation, client management, and service delivery platforms",
      projects: "22+ Projects",
      features: ["Client Portals", "Project Management", "Time Tracking", "Invoicing Systems"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Supply chain management, inventory tracking, and production systems",
      projects: "10+ Projects",
      features: ["Inventory Control", "Supply Chain", "Quality Control", "Production Planning"]
    },
    {
      icon: Briefcase,
      title: "Contracting",
      description: "Project management, bid tracking, and contractor workforce solutions",
      projects: "12+ Projects",
      features: ["Project Tracking", "Bid Management", "Workforce Scheduling", "Cost Estimation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2">Industry Expertise</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Industries</span> We Serve
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Deep industry knowledge combined with technical expertise to deliver solutions that understand your business
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="glass-card hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <Badge variant="secondary">{industry.projects}</Badge>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;