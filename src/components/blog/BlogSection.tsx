import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import aiWebDevImage from "@/assets/blog-ai-web-dev.jpg";
import ecommerceArchitectureImage from "@/assets/blog-ecommerce-architecture.jpg";
import uxPsychologyImage from "@/assets/blog-ux-psychology.jpg";
import mobilePerformanceImage from "@/assets/blog-mobile-performance.jpg";
import devopsAutomationImage from "@/assets/blog-devops-automation.jpg";
import apiSecurityImage from "@/assets/blog-api-security.jpg";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: AI Integration Trends for 2024",
      excerpt: "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences that adapt in real-time.",
      content: "As we move into 2024, AI integration in web development is no longer a luxury—it's becoming essential. Companies leveraging AI-powered development tools are seeing 40% faster deployment times...",
      category: "Technology",
      author: "Alex Johnson",
      publishDate: "2024-12-15",
      readTime: "7 min read",
      image: aiWebDevImage,
      tags: ["AI", "Web Development", "Automation", "Future Tech"],
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable E-commerce: Architecture Patterns That Work",
      excerpt: "Learn the proven architectural patterns that power million-dollar e-commerce platforms, from microservices to event-driven designs that scale effortlessly.",
      content: "Scalable e-commerce architecture isn't just about handling traffic—it's about creating systems that grow with your business. Here are the patterns that industry leaders use...",
      category: "Development",
      author: "Sarah Chen",
      publishDate: "2024-12-12",
      readTime: "10 min read",
      image: ecommerceArchitectureImage,
      tags: ["E-commerce", "Architecture", "Scalability", "Microservices"],
      featured: false
    },
    {
      id: 3,
      title: "UI/UX Design Psychology: Converting Visitors to Customers",
      excerpt: "Discover the psychological principles behind high-converting interfaces and learn how subtle design changes can dramatically boost your conversion rates.",
      content: "Great design isn't just about aesthetics—it's about understanding human psychology. The most successful apps use these principles to guide users naturally toward conversion...",
      category: "Design",
      author: "Emma Thompson",
      publishDate: "2024-12-10",
      readTime: "6 min read",
      image: uxPsychologyImage,
      tags: ["UI/UX", "Psychology", "Conversion", "Design"],
      featured: false
    },
    {
      id: 4,
      title: "Mobile-First Development: Performance Optimization Techniques",
      excerpt: "Master the art of mobile-first development with advanced optimization techniques that ensure lightning-fast load times and smooth user experiences.",
      content: "With mobile traffic dominating the web, mobile-first isn't just a trend—it's a necessity. These optimization techniques will make your apps blazingly fast...",
      category: "Mobile",
      author: "Michael Rodriguez",
      publishDate: "2024-12-08",
      readTime: "8 min read",
      image: mobilePerformanceImage,
      tags: ["Mobile", "Performance", "Optimization", "React Native"],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Automation: CI/CD Pipelines That Scale",
      excerpt: "Build bulletproof deployment pipelines that handle thousands of deployments per day while maintaining zero-downtime releases and automated rollbacks.",
      content: "Modern DevOps isn't just about deploying faster—it's about deploying smarter. These CI/CD patterns ensure reliability at scale while maintaining development velocity...",
      category: "DevOps",
      author: "David Park",
      publishDate: "2024-12-05",
      readTime: "9 min read",
      image: devopsAutomationImage,
      tags: ["DevOps", "CI/CD", "Automation", "Docker"],
      featured: false
    },
    {
      id: 6,
      title: "API Security Best Practices: Protecting Your Digital Assets",
      excerpt: "Implement enterprise-grade API security that protects against modern threats while maintaining the performance and usability your users expect.",
      content: "API security breaches cost companies millions. These proven security patterns protect your APIs without sacrificing performance or user experience...",
      category: "Security",
      author: "Lisa Wilson",
      publishDate: "2024-12-03",
      readTime: "11 min read",
      image: apiSecurityImage,
      tags: ["Security", "API", "Authentication", "Best Practices"],
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Development", "Design", "Mobile", "DevOps", "Security"];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text-premium">
            Latest Blog
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-body-premium">
            Stay ahead with our latest insights, industry trends, and expert guides from our technology leaders
          </p>
        </div>

        {/* Scrollable Blog Cards */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card 
                key={post.id} 
                className="flex-shrink-0 w-96 glass-card-premium hover-lift group overflow-hidden rounded-2xl border-primary/10 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 text-headline">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <CardDescription className="mb-6 leading-relaxed text-body-premium line-clamp-3">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs glass-subtle-premium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {blogPosts.slice(0, 3).map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-primary/30" />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-3 glass-subtle-premium hover-glow-premium text-headline rounded-2xl border-primary/20"
          >
            View All Articles
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};