import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar as CalendarIcon, Clock, User } from "lucide-react";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 text-lg px-6 py-2">Book Consultation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule Your <span className="gradient-text">Free Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss your project and explore how we can help bring your vision to life
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {i < step ? <CheckCircle className="h-5 w-5" /> : i}
              </div>
              {i < 3 && <div className={`w-20 h-1 mx-4 ${
                i < step ? "bg-primary" : "bg-muted"
              }`} />}
            </div>
          ))}
        </div>

        <Card className="glass-card">
          <CardContent className="p-8">
            {step === 1 && (
              <div className="text-center">
                <CalendarIcon className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl mb-4">Choose Your Date</CardTitle>
                <CardDescription className="mb-8">Select a convenient date for your consultation</CardDescription>
                
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="text-center">
                <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl mb-4">Select Time</CardTitle>
                <CardDescription className="mb-8">Choose your preferred time slot</CardDescription>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className="hover-scale"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <User className="h-16 w-16 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl mb-4">Your Details</CardTitle>
                <CardDescription className="mb-8">Tell us a bit about yourself</CardDescription>
                
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
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
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>
              
              <Button
                onClick={step === 3 ? () => console.log("Book consultation") : handleNext}
                disabled={
                  (step === 1 && !selectedDate) ||
                  (step === 2 && !selectedTime) ||
                  (step === 3 && (!formData.name || !formData.email))
                }
                className="hover-glow"
              >
                {step === 3 ? "Book Consultation" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;