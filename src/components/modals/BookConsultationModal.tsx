import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookConsultationModal = ({ isOpen, onClose }: BookConsultationModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
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
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    toast.success("Consultation booked successfully! We'll contact you within 24 hours.");
    onClose();
    setStep(1);
    setFormData({
      industry: "", projectType: "", budget: "", timeline: "",
      name: "", email: "", phone: "", company: "", description: ""
    });
    setSelectedDate(undefined);
  };

  const handleClose = () => {
    onClose();
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] glass-card">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Book Your Free Consultation</DialogTitle>
          <div className="flex items-center space-x-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <CheckCircle className="h-4 w-4" /> : i}
                </div>
                {i < 3 && <div className={`w-16 h-1 mx-2 ${
                  i < step ? "bg-primary" : "bg-muted"
                }`} />}
              </div>
            ))}
          </div>
        </DialogHeader>

        <div className="mt-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">Tell us about your project</h3>
                <p className="text-muted-foreground">Help us understand your needs better</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => 
                    setFormData({...formData, industry: value})
                  }>
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
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => 
                    setFormData({...formData, projectType: value})
                  }>
                    <SelectTrigger>
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
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => 
                    setFormData({...formData, budget: value})
                  }>
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

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => 
                    setFormData({...formData, timeline: value})
                  }>
                    <SelectTrigger>
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
                  className="min-h-[100px]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Choose your preferred date</h3>
                <p className="text-muted-foreground">Select a date for your consultation call</p>
              </div>

              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-[240px] justify-start text-left font-normal ${
                        !selectedDate && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {selectedDate && (
                <div className="glass-subtle p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Available Times</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"].map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your contact information</h3>
                <p className="text-muted-foreground">We'll use this to get in touch with you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
              </div>

              <div className="glass-subtle p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Consultation Summary</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Industry:</strong> {formData.industry}</p>
                  <p><strong>Project:</strong> {formData.projectType}</p>
                  <p><strong>Budget:</strong> {formData.budget}</p>
                  {selectedDate && <p><strong>Date:</strong> {format(selectedDate, "PPP")}</p>}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={step === 1 ? handleClose : handleBack}
            disabled={step === 1}
          >
            {step === 1 ? "Cancel" : "Back"}
          </Button>
          
          <Button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="hover-glow"
            disabled={
              (step === 1 && (!formData.industry || !formData.projectType)) ||
              (step === 2 && !selectedDate) ||
              (step === 3 && (!formData.name || !formData.email))
            }
          >
            {step === 3 ? "Book Consultation" : "Next"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};