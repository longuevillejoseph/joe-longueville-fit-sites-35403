import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const BookConsultation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const industries = [
    "Healthcare", "E-commerce", "Finance", "Education", "Real Estate",
    "Travel & Hospitality", "Fitness & Wellness", "Professional Services", "Manufacturing", "Contracting"
  ];

  const projectTypes = [
    "Web Application", "Mobile App", "Custom Software", "UI/UX Design",
    "E-commerce Platform", "API Development", "Digital Transformation"
  ];

  const budgetRanges = [
    "$5K - $15K", "$15K - $30K", "$30K - $50K", "$50K - $100K", "$100K+"
  ];

  const timelines = [
    "1-2 months", "3-4 months", "5-6 months", "6+ months", "Flexible"
  ];

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    toast.success("Consultation booked successfully! We'll contact you within 24 hours.");
    navigate('/');
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-background/95 to-background">
       {/* max-w-4xl */}
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's discuss your project and explore how we can help
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                i <= step ? "bg-primary text-primary-foreground shadow-lg scale-110" : "bg-muted text-muted-foreground"
              }`}>
                {i < step ? <CheckCircle className="h-6 w-6" /> : i}
              </div>
              {i < 2 && <div className={`w-32 h-1 mx-4 transition-all duration-300 ${
                i < step ? "bg-primary" : "bg-muted"
              }`} />}
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl animate-scale-in">
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Tell us about your project</h2>
                <p className="text-muted-foreground">Help us understand your needs better</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => 
                    setFormData({...formData, industry: value})
                  }>
                    <SelectTrigger className="h-12">
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
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => 
                    setFormData({...formData, projectType: value})
                  }>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="What do you need?" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select value={formData.budget} onValueChange={(value) => 
                    setFormData({...formData, budget: value})
                  }>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline *</Label>
                  <Select value={formData.timeline} onValueChange={(value) => 
                    setFormData({...formData, timeline: value})
                  }>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="When do you need it?" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  placeholder="Tell us more about your project goals and requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="min-h-[140px] resize-none"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-2">Schedule Your Consultation</h2>
                <p className="text-muted-foreground">Pick a time that works best for you</p>
              </div>

              <div className="w-full overflow-hidden rounded-lg border border-border/50 shadow-lg">
                <iframe 
                
                  src="https://api.leadconnectorhq.com/widget/booking/iMwVVq4Wmq5gXkLUvWij" 
                  style={{ width: '100%', minHeight: '600px', border: 'none', overflow: 'hidden' }} 
                  scrolling="no"
                  id="uPF1dh9SmgMcoXYhPBeF_1761135994633"
                  title="Book Consultation Calendar"
                />
              </div>
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>

              <div className="glass-subtle p-6 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-lg mb-3">Your Project Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{formData.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Type:</span>
                    <span className="font-medium">{formData.projectType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">{formData.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-border/50">
            {step === 1 ? (
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            
            <Button
              onClick={step === 2 ? handleSubmit : handleNext}
              size="lg"
              className="hover-glow px-8"
              disabled={
                (step === 1 && (!formData.industry || !formData.projectType || !formData.budget || !formData.timeline))
              }
            >
              {step === 2 ? "Complete Booking" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
