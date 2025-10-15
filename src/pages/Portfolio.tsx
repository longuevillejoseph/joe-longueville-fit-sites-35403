import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, TrendingUp, Award } from "lucide-react";

// Import portfolio images
import healthConnectImg from "@/assets/portfolio/healthconnect-pro.jpg";
import shopSphereImg from "@/assets/portfolio/shopsphere.jpg";
import fitTrackerImg from "@/assets/portfolio/fittracker-mobile.jpg";
import financeFlowImg from "@/assets/portfolio/financeflow-platform.jpg";
import eduLearnImg from "@/assets/portfolio/edulearn-lms.jpg";
import propertyProImg from "@/assets/portfolio/propertypro-platform.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "HealthConnect Pro",
      category: "Healthcare",
      description: "Revolutionary telemedicine platform that transformed patient care delivery for a network of 150+ healthcare providers",
      detailedDescription: "HealthConnect Pro addressed the critical need for accessible healthcare during the pandemic, enabling seamless virtual consultations while maintaining HIPAA compliance and ensuring high-quality patient care.",
      image: healthConnectImg,
      client: "MedCare Network",
      duration: "8 months",
      teamSize: "6 developers",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC", "AWS"],
      features: ["HD Video Consultations", "Electronic Prescriptions", "Integrated Patient Records", "Real-time Chat", "Appointment Scheduling", "Insurance Integration"],
      problem: "Healthcare providers needed a secure, reliable platform for remote patient consultations that could handle high volumes while maintaining medical data privacy standards.",
      solution: "Built a scalable telemedicine platform with end-to-end encryption, real-time video/audio capabilities, and seamless integration with existing medical record systems.",
      results: [
        "300% increase in patient consultations",
        "50% reduction in no-show appointments", 
        "99.9% uptime reliability",
        "HIPAA compliance certification"
      ],
      challenges: ["HIPAA compliance requirements", "Real-time video optimization", "Integration with legacy systems"],
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "ShopSphere Enterprise",
      category: "E-commerce", 
      description: "Advanced e-commerce platform powering $50M+ in annual sales with AI-driven personalization and real-time analytics",
      detailedDescription: "ShopSphere transformed traditional retail operations with intelligent inventory management, personalized shopping experiences, and comprehensive business analytics for enterprise-level e-commerce operations.",
      image: shopSphereImg,
      client: "RetailMax Corp",
      duration: "12 months",
      teamSize: "8 developers",
      technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Docker", "Kubernetes", "TensorFlow"],
      features: ["AI Product Recommendations", "Real-time Inventory Sync", "Multi-payment Gateway", "Advanced Analytics", "Automated Marketing", "Multi-vendor Support"],
      problem: "Large retail corporation struggling with outdated e-commerce infrastructure, leading to poor user experience and significant revenue loss from cart abandonment.",
      solution: "Developed a modern, scalable e-commerce platform with AI-powered personalization, advanced analytics, and seamless third-party integrations.",
      results: [
        "250% increase in conversion rates",
        "40% reduction in cart abandonment",
        "$50M+ annual sales volume",
        "85% faster page load times"
      ],
      challenges: ["Legacy system migration", "High-traffic scalability", "Complex payment integrations"],
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "FitLife Pro Mobile",
      category: "Fitness",
      description: "Comprehensive fitness ecosystem with 500K+ active users, featuring personalized workouts and social fitness challenges",
      detailedDescription: "FitLife Pro revolutionized personal fitness with AI-powered workout recommendations, social community features, and comprehensive health tracking for maximum user engagement and results.",
      image: fitTrackerImg,
      client: "FitLife Studios",
      duration: "10 months",
      teamSize: "7 developers",
      technologies: ["React Native", "Firebase", "Node.js", "AWS", "TensorFlow", "HealthKit"],
      features: ["AI Workout Plans", "Social Challenges", "Progress Analytics", "Nutrition Tracking", "Wearable Integration", "Live Classes"],
      problem: "Fitness company needed a comprehensive mobile solution to engage users beyond gym visits and provide personalized fitness guidance at scale.",
      solution: "Created an intelligent fitness app with personalized workout generation, social features for motivation, and comprehensive health data integration.",
      results: [
        "500K+ active monthly users",
        "180% increase in user retention",
        "4.8/5 app store rating",
        "75% daily active user rate"
      ],
      challenges: ["Cross-platform compatibility", "Wearable device integration", "Real-time social features"],
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "FinanceFlow Trading Platform",
      category: "Finance",
      description: "High-frequency trading platform processing millions of transactions daily with microsecond latency and enterprise security",
      detailedDescription: "FinanceFlow delivers institutional-grade trading capabilities with real-time market data, advanced charting, and risk management tools for professional traders and financial institutions.",
      image: financeFlowImg,
      client: "TradeTech Solutions",
      duration: "14 months",
      teamSize: "10 developers",
      technologies: ["Python", "React", "PostgreSQL", "Redis", "WebSocket", "Docker", "Kafka"],
      features: ["Real-time Trading", "Advanced Charting", "Risk Management", "Portfolio Analytics", "Algorithmic Trading", "Multi-asset Support"],
      problem: "Financial services company required a robust trading platform capable of handling high-frequency transactions with minimal latency and maximum security.",
      solution: "Built a low-latency trading system with real-time data processing, advanced analytics, and enterprise-grade security measures.",
      results: [
        "Microsecond transaction latency",
        "99.99% system uptime",
        "$10B+ daily trading volume",
        "Zero security breaches"
      ],
      challenges: ["Ultra-low latency requirements", "Financial data security", "High-availability architecture"],
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "EduLearn LMS Platform",
      category: "Education",
      description: "Comprehensive learning management system serving 100K+ students with interactive content and advanced analytics",
      detailedDescription: "EduLearn transformed online education delivery with interactive learning modules, comprehensive progress tracking, and intelligent content recommendation for enhanced student outcomes.",
      image: eduLearnImg,
      client: "EduTech University",
      duration: "9 months",
      teamSize: "6 developers",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Elasticsearch"],
      features: ["Interactive Courses", "Video Conferencing", "Progress Analytics", "Assignment Management", "Discussion Forums", "Mobile Learning"],
      problem: "Educational institution needed a modern LMS to deliver engaging online courses with comprehensive tracking and assessment capabilities.",
      solution: "Developed an interactive learning platform with multimedia content support, real-time collaboration tools, and detailed analytics dashboard.",
      results: [
        "400% increase in course completion",
        "100K+ active students",
        "90% student satisfaction rate",
        "50% reduction in admin workload"
      ],
      challenges: ["Scalable video delivery", "Interactive content creation", "Multi-device compatibility"],
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "PropertyPro Real Estate",
      category: "Real Estate",
      description: "Intelligent real estate platform with virtual tours, AI valuations, and automated lead management for 1000+ agents",
      detailedDescription: "PropertyPro revolutionized real estate operations with virtual property tours, AI-powered property valuations, and comprehensive agent management tools for maximum sales efficiency.",
      image: propertyProImg,
      client: "Premier Realty Group",
      duration: "11 months",
      teamSize: "9 developers",
      technologies: ["React", "Python", "PostgreSQL", "Three.js", "AWS", "TensorFlow"],
      features: ["Virtual Tours", "AI Property Valuation", "Lead Management", "Document Automation", "Market Analytics", "Agent Dashboard"],
      problem: "Real estate company needed to modernize property showcasing and streamline agent workflows to compete in the digital-first market.",
      solution: "Created an comprehensive real estate platform with immersive virtual tours, intelligent lead scoring, and automated workflow management.",
      results: [
        "200% increase in agent productivity",
        "3x more property viewings",
        "60% faster deal closures",
        "1000+ active agents"
      ],
      challenges: ["3D virtual tour implementation", "AI valuation accuracy", "Large-scale agent onboarding"],
      liveUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const categories = ["All", "Healthcare", "E-commerce", "Fitness", "Finance", "Education", "Real Estate"];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2">Our Work</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span> Showcase
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform through technology
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="hover-scale"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="glass-card hover-scale overflow-hidden group">
                <div className="aspect-video bg-muted/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.teamSize}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-2 italic">Client: {project.client}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Problem & Solution:</h4>
                    <p className="text-xs text-muted-foreground mb-2">{project.problem}</p>
                    <p className="text-xs text-muted-foreground">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-xs bg-primary/10 rounded px-2 py-1">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                      {project.features.length > 4 && (
                        <Badge variant="outline" className="text-xs">+{project.features.length - 4} more</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">+{project.technologies.length - 4} more</Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technical Challenges:</h4>
                    <div className="space-y-1">
                      {project.challenges.slice(0, 2).map((challenge, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border/50">
                    <Button asChild size="sm" className="flex-1 text-xs">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
                      <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                        <Award className="w-3 h-3 mr-1" />
                        Case Study
                      </a>
                    </Button>
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

export default Portfolio;