import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, TrendingUp, Star, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Targeting",
      description: "AI-powered lead identification with 95% accuracy using advanced filtering by industry, company size, and buying intent."
    },
    {
      icon: CheckCircle,
      title: "Verified Contacts",
      description: "Real-time verified email addresses and phone numbers with 98% deliverability rate backed by our verification system."
    },
    {
      icon: TrendingUp,
      title: "CRM Integration",
      description: "Seamless integration with Salesforce, HubSpot, Pipedrive, and 50+ CRMs with one-click lead export."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "VP of Sales, TechFlow",
      content: "PerfectDatabase increased our qualified leads by 300% in just 3 months. The data quality is exceptional.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Sales Director, GrowthLab",
      content: "Finally found a lead generation tool that actually works. Our conversion rates have never been higher.",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Marketing Manager, DataCorp",
      content: "The targeting capabilities are incredible. We're reaching decision-makers we never could before.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Users" },
    { number: "10M+", label: "Leads Generated" },
    { number: "98%", label: "Data Accuracy" },
    { number: "300%", label: "Average Pipeline Growth" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Lead Generation Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                #1 B2B Lead Generation Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Fuel Your Sales Pipeline with
                <span className="text-primary"> Qualified B2B Leads</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Generate high-quality, hyper-targeted leads through advanced prospecting tools, 
                intelligent automation, and data-driven strategies that actually convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="group">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ✓ 14-day free trial ✓ No credit card required ✓ 100 free leads
              </p>
            </div>
            
            {/* Hero Image/Dashboard Preview */}
            <div className="animate-fade-in lg:animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-float"></div>
                <Card className="relative shadow-large">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Lead Generation Dashboard</CardTitle>
                        <CardDescription>Real-time analytics & insights</CardDescription>
                      </div>
                      <Badge variant="default">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Leads Generated Today</span>
                        <span className="text-2xl font-bold text-primary">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                        <span className="text-2xl font-bold text-success">24.3%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose PerfectDatabase?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, manage, and optimize your B2B sales pipeline with precision and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-primary transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by 50,000+ Sales Professionals
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about their results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to 3x Your Sales Pipeline?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of sales teams who have transformed their lead generation with PerfectDatabase. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Start Free Trial
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book a Demo
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-80">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
