import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

// Import testimonial images
import sarahJohnsonImg from "@/assets/testimonials/sarah-johnson.jpg";
import michaelChenImg from "@/assets/testimonials/michael-chen.jpg";
import amandaRodriguezImg from "@/assets/testimonials/amanda-rodriguez.jpg";
import davidParkImg from "@/assets/testimonials/david-park.jpg";
import lisaThompsonImg from "@/assets/testimonials/lisa-thompson.jpg";
import jamesWilsonImg from "@/assets/testimonials/james-wilson.jpg";

export const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "HealthTech Solutions",
      industry: "Healthcare",
      content: "TechFlow transformed our healthcare platform completely. The user experience is incredible and our patient engagement increased by 300%. Their expertise in HIPAA compliance was crucial for our success.",
      rating: 5,
      projectType: "Healthcare Platform",
      results: "+300% Patient Engagement",
      avatar: sarahJohnsonImg
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "EcommerceHub",
      industry: "E-commerce",
      content: "The e-commerce solution they built handles thousands of transactions daily flawlessly. Revenue increased 250% in the first quarter. The scalability and performance exceeded our expectations.",
      rating: 5,
      projectType: "E-commerce Platform",
      results: "+250% Revenue Growth",
      avatar: michaelChenImg
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      role: "CTO",
      company: "FinanceFlow",
      industry: "Finance",
      content: "Their fintech expertise is unmatched. The trading platform they developed is lightning-fast and ultra-secure. Real-time data processing handles millions of transactions seamlessly.",
      rating: 5,
      projectType: "Trading Platform",
      results: "Real-time Processing",
      avatar: amandaRodriguezImg
    },
    {
      id: 4,
      name: "David Park",
      role: "Director of IT",
      company: "EduLearn Pro",
      industry: "Education",
      content: "The learning management system revolutionized our online education delivery. Student engagement is up 400% and our course completion rates doubled. Outstanding work!",
      rating: 5,
      projectType: "LMS Platform",
      results: "+400% Engagement",
      avatar: davidParkImg
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "PropertyPro",
      industry: "Real Estate",
      content: "The real estate platform streamlined our entire workflow. Property listings get 3x more views, and our agent productivity increased by 200%. Excellent solution!",
      rating: 5,
      projectType: "Real Estate Platform",
      results: "+200% Productivity",
      avatar: lisaThompsonImg
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CEO",
      company: "FitLife Studios",
      industry: "Fitness",
      content: "The fitness app they built has been a game-changer. Member retention increased by 180% and our online class bookings are through the roof. Perfect execution!",
      rating: 5,
      projectType: "Fitness Mobile App",
      results: "+180% Retention",
      avatar: jamesWilsonImg
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what industry leaders say about our transformative solutions.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="glass-card hover-scale transition-all duration-300 relative overflow-hidden flex-shrink-0 w-96"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full ring-2 ring-primary/20"
                      />
                      <div className="flex-1">  
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground">Project Type</p>
                        <p className="text-sm font-medium">{testimonial.projectType}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Results</p>
                        <p className="text-sm font-semibold text-primary">{testimonial.results}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">+250%</div>
              <p className="text-muted-foreground">Avg ROI Increase</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <p className="text-muted-foreground">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};