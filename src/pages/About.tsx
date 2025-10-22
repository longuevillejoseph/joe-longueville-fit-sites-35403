import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, Eye, Users, Code, Palette, Smartphone, 
  Cog, Award, TrendingUp, Globe, Heart, Zap
} from "lucide-react";

const About = () => {

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Lead Developer",
      expertise: "Full-Stack Development, Architecture",
      experience: "8+ years",
      icon: Code,
      description: "Passionate about creating scalable solutions that drive business growth."
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      expertise: "UI/UX Design, User Research",
      experience: "6+ years", 
      icon: Palette,
      description: "Crafting beautiful interfaces that users love to interact with."
    },
    {
      name: "Michael Rodriguez",
      role: "Mobile Development Lead",
      expertise: "React Native, Flutter, iOS/Android",
      experience: "7+ years",
      icon: Smartphone,
      description: "Building mobile experiences that connect people and drive engagement."
    },
    {
      name: "Emma Thompson",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure, CI/CD",
      experience: "5+ years",
      icon: Cog,
      description: "Ensuring our solutions are fast, secure, and always available."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that are ahead of the curve."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building long-term partnerships, not just completing projects. Your success is our success."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every line of code, every design element, and every user interaction is crafted to the highest standards."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We're always learning, evolving, and improving to stay at the forefront of technology."
    },
    {
      icon: Globe,
      title: "Global Impact", 
      description: "Our solutions don't just serve businesses – they create positive impact for communities worldwide."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We're genuinely passionate about technology and its power to transform businesses and lives."
    }
  ];

  const achievements = [
    { number: "150+", label: "Projects Completed", icon: Target },
    { number: "80+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Client Retention", icon: Heart },
    { number: "5", label: "Years Experience", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2 glass-subtle">
            About TechFlow
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Transforming Ideas</span>
            <br />
            into Digital Reality
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and strategists who believe 
            technology should be a force for positive change. Founded in 2019, we've helped 
            over 80 businesses transform their operations through innovative digital solutions.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="glass-card hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg">
                  To democratize technology and make powerful digital solutions accessible to businesses 
                  of all sizes. We believe every great idea deserves exceptional execution, and we're 
                  here to make that happen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg">
                  To be the trusted technology partner that businesses turn to when they want to 
                  innovate, scale, and create meaningful impact. We envision a world where technology 
                  enhances human potential rather than replacing it.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover-scale text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind TechFlow's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card hover-scale text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <member.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                  <Badge variant="secondary" className="mt-2">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                  <CardDescription className="text-xs">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 glass-card mx-4 mb-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Digital Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link to="/book-consultation">
            <Button 
              size="lg" 
              className="text-lg px-8 hover-glow animate-glow-pulse"
            >
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;