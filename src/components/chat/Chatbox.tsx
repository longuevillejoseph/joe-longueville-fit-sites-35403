import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, X, Send, Bot, User, 
  Palette, Code, Smartphone, Cog,
  ArrowRight, CheckCircle
} from "lucide-react";
import { QuoteModal } from "@/components/modals/QuoteModal";
import { BookConsultationModal } from "@/components/modals/BookConsultationModal";

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: Array<{
    label: string;
    value: string;
    action?: () => void;
  }>;
}

export const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", interest: "" });
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const services = [
    { icon: Palette, name: "UI/UX Design", value: "ui-ux" },
    { icon: Code, name: "Web Development", value: "web-dev" },
    { icon: Smartphone, name: "Mobile Apps", value: "mobile" },
    { icon: Cog, name: "Custom Software", value: "custom" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(
          "👋 Hi there! I'm Alex, your virtual assistant at Fitville. I'm here to help you find the perfect digital solution for your business.",
          [
            { 
              label: "Explore Services", 
              value: "services",
              action: () => handleUserChoice("I'd like to explore your services")
            },
            { 
              label: "Get a Quote", 
              value: "quote",
              action: () => handleUserChoice("I need a quote for my project")
            },
            { 
              label: "Book Consultation", 
              value: "consultation",
              action: () => {
                setShowBookingModal(true);
                addBotMessage("Perfect! I'm opening our booking system for you. You can schedule a free consultation to discuss your project in detail.");
              }
            }
          ]
        );
      }, 1000);
    }
  }, [isOpen]);

  const addBotMessage = (content: string, options?: Message['options']) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
        options
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user', 
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleUserChoice = (choice: string) => {
    addUserMessage(choice);
    
    if (choice.includes("services")) {
      setConversationStep(1);
      setTimeout(() => {
        addBotMessage(
          "Great! We specialize in creating digital solutions that transform businesses. Here are our core services:",
          services.map(service => ({
            label: service.name,
            value: service.value,
            action: () => handleServiceSelection(service.name, service.value)
          }))
        );
      }, 500);
    } else if (choice.includes("quote")) {
      setTimeout(() => {
        addBotMessage("Excellent! I'll help you get a customized quote. Let me open our quote form where you can tell us about your project requirements.");
        setTimeout(() => {
          setShowQuoteModal(true);
        }, 1000);
      }, 500);
    }
  };

  const handleServiceSelection = (serviceName: string, serviceValue: string) => {
    addUserMessage(`Tell me about ${serviceName}`);
    setSelectedService(serviceName);
    
    const serviceInfo: Record<string, string> = {
      "UI/UX Design": "Our design team creates beautiful, intuitive interfaces that users love. We focus on user research, wireframing, prototyping, and creating design systems that scale with your business.",
      "Web Development": "We build modern, fast, and scalable web applications using cutting-edge technologies like React, Next.js, and Node.js. From simple websites to complex web platforms.",
      "Mobile Apps": "Our mobile development team creates native and cross-platform apps for iOS and Android using React Native and Flutter. We handle everything from concept to app store deployment.",
      "Custom Software": "We develop tailored software solutions that automate your business processes and solve complex problems. From APIs to enterprise applications, we've got you covered."
    };

    setTimeout(() => {
      addBotMessage(
        serviceInfo[serviceName] || "This service helps businesses grow through technology.",
        [
          { 
            label: "Get Quote", 
            value: "get-quote",
            action: () => {
              setShowQuoteModal(true);
              addBotMessage("Perfect! I'm opening our quote form. You can specify your exact requirements and get a detailed proposal.");
            }
          },
          { 
            label: "See Portfolio", 
            value: "portfolio",
            action: () => {
              addUserMessage("Show me examples of your work");
              addBotMessage("You can view our complete portfolio at /portfolio. We've successfully delivered 150+ projects across various industries including healthcare, e-commerce, and fintech.");
            }
          },
          { 
            label: "Ask Questions", 
            value: "questions",
            action: () => {
              addUserMessage("I have some questions");
              addBotMessage("I'm here to help! What would you like to know about our services, process, or pricing?");
              setConversationStep(2);
            }
          }
        ]
      );
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addUserMessage(inputValue);
    const userMessage = inputValue.toLowerCase();
    setInputValue("");

    // Simple keyword-based responses
    setTimeout(() => {
      if (userMessage.includes("price") || userMessage.includes("cost")) {
        addBotMessage("Our pricing varies based on project complexity. UI/UX Design starts from $5,000, Web Development from $8,000, Mobile Apps from $12,000, and Custom Software from $15,000. Would you like a detailed quote?", [
          { label: "Get Custom Quote", value: "quote", action: () => setShowQuoteModal(true) }
        ]);
      } else if (userMessage.includes("time") || userMessage.includes("long")) {
        addBotMessage("Project timelines depend on scope and complexity. Simple projects take 2-4 weeks, while complex applications can take 3-6 months. We use agile methodology with 2-week sprints for regular updates.");
      } else if (userMessage.includes("support") || userMessage.includes("maintenance")) {
        addBotMessage("Yes! We provide ongoing support and maintenance packages including updates, security monitoring, performance optimization, and technical support to keep your solution running smoothly.");
      } else if (userMessage.includes("team") || userMessage.includes("experience")) {
        addBotMessage("Our team has 5+ years of experience with 15+ senior developers and designers. We've successfully delivered 150+ projects for 80+ happy clients across various industries.");
      } else {
        addBotMessage("Thanks for your question! For detailed information, I'd recommend booking a free consultation where our experts can provide personalized answers.", [
          { 
            label: "Book Consultation", 
            value: "book", 
            action: () => setShowBookingModal(true)
          },
          { 
            label: "Get Quote", 
            value: "quote", 
            action: () => setShowQuoteModal(true)
          }
        ]);
      }
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover-glow animate-glow-pulse z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <>
      <Card className={`fixed bottom-6 right-6 w-80 md:w-96 shadow-2xl z-50 glass-card transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[500px]'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Fitville Assistant</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8"
              >
                <ArrowRight className={`h-4 w-4 transition-transform ${isMinimized ? 'rotate-90' : '-rotate-90'}`} />
              </Button>
              <Button
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[calc(100%-5rem)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
              {messages.map((message) => (
                <div key={message.id}>
                  <div className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div className={`max-w-[75%] p-3 rounded-lg text-sm ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      {message.content}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                  
                  {/* Options */}
                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-11">
                      {message.options.map((option, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          onClick={option.action}
                          className="text-xs hover-scale"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="hover-glow">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
        serviceType={selectedService}
      />
      
      <BookConsultationModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)} 
      />
    </>
  );
};