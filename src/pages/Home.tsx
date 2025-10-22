import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, Star, Users, Briefcase, 
  TrendingUp, Globe, Zap, CheckCircle,
  Play, ExternalLink, Calendar, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { BookConsultationModal } from "@/components/modals/BookConsultationModal";
import { BlogSection } from "@/components/blog/BlogSection";
import { ClientTestimonials } from "@/components/testimonials/ClientTestimonials";

const Home = () => {

  console.log("testing");
  

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });

  // Enhanced animated counters
  useEffect(() => {
    const targetValues = { projects: 150, clients: 80, years: 5 };
    const duration = 2500;
    const steps = 80;
    const stepTime = duration / steps;

    const intervals: NodeJS.Timeout[] = [];
    
    Object.keys(targetValues).forEach(key => {
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
      
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const services = [
    {
      title: "UI/UX Design & Strategy",
      description: "We craft exceptional digital experiences through comprehensive user research and strategic design thinking. Our design process ensures every pixel serves a purpose.",
      detailedDescription: "From initial concept to final implementation, we create interfaces that not only look stunning but drive meaningful user engagement and business results.",
      features: ["User Research & Analytics", "Information Architecture", "Interactive Prototyping", "Design Systems", "Accessibility Compliance", "A/B Testing & Optimization"],
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
      projects: "50+ Projects",
      satisfaction: "98% Client Satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full-Stack Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies. We deliver lightning-fast performance with enterprise-grade security and reliability.",
      detailedDescription: "Our development approach focuses on clean, maintainable code that scales with your business growth while ensuring optimal performance across all devices.",
      features: ["React/Next.js Applications", "Node.js Backend Systems", "Database Architecture", "RESTful API Development", "Cloud Infrastructure", "DevOps & CI/CD"],
      tools: ["React", "Node.js", "PostgreSQL", "AWS"],
      projects: "75+ Applications", 
      satisfaction: "100% Uptime SLA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that deliver seamless user experiences across iOS and Android platforms with optimal performance.",
      detailedDescription: "We build mobile apps that users love, with intuitive interfaces, smooth animations, and robust backend integration for maximum engagement.",
      features: ["React Native Development", "Flutter Applications", "Native iOS & Android", "App Store Optimization", "Push Notifications", "Offline Functionality"],
      tools: ["React Native", "Flutter", "Xcode", "Android Studio"],
      projects: "40+ Mobile Apps",
      satisfaction: "4.8★ Average Rating",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Software Solutions",
      description: "Custom enterprise software that automates complex business processes, integrates with existing systems, and scales with your organization's growth.",
      detailedDescription: "We transform business challenges into streamlined digital solutions that improve efficiency, reduce costs, and drive competitive advantage.",
      features: ["Business Process Automation", "System Integration", "Custom CRM/ERP Solutions", "Data Analytics Dashboards", "Security & Compliance", "24/7 Support & Maintenance"],
      tools: ["Python", "Java", "Microservices", "Docker"],
      projects: "30+ Enterprise Solutions",
      satisfaction: "99.5% System Reliability",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, HealthTech Solutions",
      company: "HealthTech Solutions",
      content: "TechFlow transformed our healthcare platform completely. The user experience is incredible and our patient engagement increased by 300%.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcommerceHub",
      company: "EcommerceHub",
      content: "The e-commerce solution they built handles thousands of transactions daily flawlessly. Revenue increased 250% in the first quarter.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Amanda Rodriguez",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content: "Their fintech expertise is unmatched. The trading platform they developed is lightning-fast and ultra-secure.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "15+ senior developers and designers with proven track records"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 40% increase in user engagement and 60% boost in conversions"
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Built to grow with your business using cloud-native architectures"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development process with 2-week sprint deliveries"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends for 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to advanced performance optimization.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Learn how to architect e-commerce solutions that can handle millions of users and transactions seamlessly.",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Development"
    },
    {
      title: "UI/UX Design Principles That Drive Conversions",
      excerpt: "Discover the design principles that turn visitors into customers and boost your business metrics.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Award-Winning Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="https://player.vimeo.com/progressive_redirect/download/483640379/container/dffe1ecd-ec73-4eb0-90c8-0314f34b7b06/dffe1ecd-ec73-4eb0-90c8-0314f34b7b06.mp4?expires=1709222400&loc=external&signature=f1b3d7b8c9e0a2d4f6c8b0a9e7f5d3c1b9a7e5c3d1f9b7d5e3c1a9f7e5d3c1b9" type="video/mp4" />
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        </div>

        {/* Premium Background Effects - Now on top of video */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-elegant" />
          <div className="absolute bottom-1/4 -right-1/4 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-float-elegant" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-premium text-center relative z-20">
          <Badge variant="outline" className="mb-8 text-base px-6 py-2 glass-subtle-premium hover-shimmer animate-bounce-elegant border-primary/20">
            🚀 Crafting Award-Winning Digital Experiences
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-none">
            <span className="gradient-text-premium block animate-slide-up-elegant">Building Tomorrow's</span>
            <span className="text-foreground block animate-slide-up-elegant" style={{ animationDelay: '0.3s' }}>Digital Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-body-premium animate-fade-in-premium" style={{ animationDelay: '0.6s' }}>
            We create exceptional digital solutions that transform businesses and captivate users through innovative design and cutting-edge technology.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 animate-scale-in-premium" style={{ animationDelay: '0.9s' }}>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-elegant mb-2 animate-counter">
                {counters.projects}+
              </div>
              <p className="text-muted-foreground text-sm md:text-base font-medium">Premium Projects</p>
            </div>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-elegant mb-2 animate-counter">
                {counters.clients}+
              </div>
              <p className="text-muted-foreground text-sm md:text-base font-medium">Satisfied Clients</p>
            </div>
            <div className="glass-card-premium p-6 rounded-2xl hover-lift">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-elegant mb-2 animate-counter">
                {counters.years}+
              </div>
              <p className="text-muted-foreground text-sm md:text-base font-medium">Years Excellence</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-premium" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="text-lg px-10 py-4 btn-premium hover-shimmer text-headline rounded-2xl shadow-award"
              onClick={() => setShowBookingModal(true)}
            >
              Start Your Project <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 glass-subtle-premium hover-glow-premium text-headline rounded-2xl border-primary/20"
            >
              <Play className="mr-3 h-6 w-6" />
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Edition */}
      <section className="section-padding bg-muted/20">
        <div className="container-premium">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text-premium animate-text-reveal">
              Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-body-premium animate-fade-in-premium" style={{ animationDelay: '0.2s' }}>
              We specialize in creating digital experiences that drive results and transform businesses through innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 stagger-container">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-award hover-lift group overflow-hidden rounded-3xl border-primary/10"
                style={{ '--stagger-index': index } as any}
              >
                <CardHeader className="text-left pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <CardTitle className="text-3xl font-display font-bold text-headline">
                      {service.title}
                    </CardTitle>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
                  <CardDescription className="text-lg leading-relaxed mb-6 text-body-premium">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-left pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-4 text-foreground text-headline">Key Points:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-base">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground text-body-premium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials - Award-Winning Section */}
      <ClientTestimonials />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text-premium">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-body-premium">
              We deliver exceptional results through our unique combination of expertise, innovation, and dedication to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className="text-center p-8 glass-card-premium hover-lift rounded-2xl border-primary/10"
              >
                <div className="mb-6 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-headline">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-body-premium leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Premium */}
      <section className="section-padding-sm bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container-premium text-center">
          <div className="glass-award p-12 md:p-16 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text-premium">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-body-premium">
              Let's create something extraordinary together. Start your digital transformation journey with award-winning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-4 btn-premium text-headline rounded-2xl shadow-award hover-shimmer"
                onClick={() => setShowBookingModal(true)}
              >
                Get Started Today <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-lg px-10 py-4 glass-subtle-premium hover-glow-premium text-headline rounded-2xl border-primary/20"
              >
                <Link to="/portfolio">
                  <ExternalLink className="mr-3 h-6 w-6" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights - Premium Blog Section */}
      <BlogSection />

      {/* Newsletter Subscription Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-premium">
          <div className="glass-award p-12 md:p-16 rounded-3xl max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text-premium">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-body-premium">
                Stay updated with the latest insights, industry trends, and exclusive tips delivered straight to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl glass-subtle-premium border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
              <Button 
                size="lg" 
                className="px-8 py-4 btn-premium text-headline rounded-2xl shadow-award hover-shimmer whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No spam, unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Exclusive content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookConsultationModal
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
      />
    </div>
  );
};

export default Home;