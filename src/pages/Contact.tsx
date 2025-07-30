import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@perfectdatabase.com",
      description: "We typically respond within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(520) 555-0123",
      description: "Monday-Friday, 8AM-6PM MST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Tucson, AZ 85719",
      description: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM MST",
      description: "Weekend support available"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Get in
              <span className="text-primary"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Ready to transform your lead generation? Let's discuss how PerfectDatabase can help grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="purpose">How can we help?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Schedule a Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your lead generation challenges..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking to demo our platform, discuss pricing, or explore partnership opportunities, 
                  we're here to help. Our team responds quickly and we're always happy to answer questions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="hover:shadow-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-sm text-foreground mb-1">{info.details}</p>
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Live Chat CTA */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="mb-4 opacity-90">
                    Chat with our team right now for instant answers to your questions.
                  </p>
                  <Button variant="secondary" size="lg">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Tucson Office Location</p>
                      <p className="text-sm text-muted-foreground">Interactive map would be embedded here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quick Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions we get from potential customers
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can I get started?",
                answer: "You can start generating leads within 15 minutes of signing up. Our onboarding is designed to be fast and simple."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Yes, our Enterprise plan includes custom integrations and API access. Contact our team to discuss your specific needs."
              },
              {
                question: "What's your data accuracy guarantee?",
                answer: "We guarantee 95-99% data accuracy depending on your plan, with real-time verification and regular data updates."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;