import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

export const QuoteModal = ({ isOpen, onClose, serviceType = "" }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    serviceType: serviceType,
    industry: "",
    projectScope: "",
    timeline: "", 
    budget: "",
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
    features: [] as string[]
  });

  const services = [
    "UI/UX Design",
    "Web Development", 
    "Mobile App Development",
    "Custom Software Development",
    "E-commerce Platform",
    "API Development",
    "Digital Transformation"
  ];

  const industries = [
    "Healthcare", "E-commerce", "Finance", "Education", "Real Estate",
    "Travel & Hospitality", "Fitness & Wellness", "Professional Services", 
    "Manufacturing", "Technology", "Contracting", "Other"
  ];

  const projectScopes = [
    "Small Project (1-2 months)",
    "Medium Project (3-6 months)", 
    "Large Project (6+ months)",
    "Enterprise Solution"
  ];

  const budgetRanges = [
    "$5K - $15K",
    "$15K - $30K", 
    "$30K - $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K+"
  ];

  const commonFeatures = [
    "User Authentication",
    "Payment Integration",
    "Admin Dashboard",
    "Mobile Responsive",
    "API Integration",
    "Real-time Updates",
    "Analytics & Reporting",
    "Third-party Integrations",
    "Cloud Deployment",
    "Database Design"
  ];

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    toast.success("Quote request submitted! We'll send you a detailed proposal within 24 hours.");
    onClose();
    
    // Reset form
    setFormData({
      serviceType: "",
      industry: "",
      projectScope: "",
      timeline: "",
      budget: "",
      name: "",
      email: "",
      company: "",
      phone: "",
      description: "",
      features: []
    });
  };

  const isFormValid = formData.name && formData.email && formData.serviceType;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto glass-card">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl gradient-text">Get Your Project Quote</DialogTitle>
              <p className="text-muted-foreground">Tell us about your project and get a detailed proposal</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select 
                  value={formData.serviceType} 
                  onValueChange={(value) => setFormData({...formData, serviceType: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="What service do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select 
                  value={formData.industry} 
                  onValueChange={(value) => setFormData({...formData, industry: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectScope">Project Scope</Label>
                <Select 
                  value={formData.projectScope} 
                  onValueChange={(value) => setFormData({...formData, projectScope: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Project size" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectScopes.map((scope) => (
                      <SelectItem key={scope} value={scope}>{scope}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select 
                  value={formData.budget} 
                  onValueChange={(value) => setFormData({...formData, budget: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                placeholder="Describe your project goals, requirements, and any specific features you need..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Features Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Required Features</h3>
            <p className="text-sm text-muted-foreground">Select all features that apply to your project</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {commonFeatures.map((feature) => (
                <div
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
                    formData.features.includes(feature)
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-muted/30 border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{feature}</span>
                    {formData.features.includes(feature) && (
                      <CheckCircle className="h-4 w-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {formData.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Selected:</span>
                {formData.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Quote Summary */}
          {formData.serviceType && (
            <div className="glass-subtle p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Quote Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span>{formData.serviceType}</span>
                </div>
                {formData.industry && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span>{formData.industry}</span>
                  </div>
                )}
                {formData.budget && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget:</span>
                    <span>{formData.budget}</span>
                  </div>
                )}
                {formData.features.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Features:</span>
                    <span>{formData.features.length} selected</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          
          <Button
            onClick={handleSubmit}
            className="hover-glow"
            disabled={!isFormValid}
          >
            Request Quote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};