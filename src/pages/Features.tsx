import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Database, Zap, Users, Shield, BarChart3, Mail, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Targeting",
      description: "AI-powered lead identification with 95% accuracy using advanced filtering by industry, company size, job title, and buying intent signals.",
      benefits: ["Industry-specific targeting", "Company size filters", "Job title precision", "Buying intent detection"]
    },
    {
      icon: Database,
      title: "Verified Contact Info",
      description: "Real-time verified email addresses and phone numbers with 98% deliverability rate, backed by our advanced verification system.",
      benefits: ["98% email deliverability", "Real-time verification", "Phone number validation", "GDPR compliant data"]
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Seamless integration with Salesforce, HubSpot, Pipedrive, and 50+ CRMs. One-click lead export and automated workflows.",
      benefits: ["50+ CRM integrations", "One-click export", "Automated workflows", "Real-time sync"]
    },
    {
      icon: Mail,
      title: "Email Campaign Ready",
      description: "Pre-formatted lead lists optimized for email campaigns with personalization tokens and engagement scoring.",
      benefits: ["Personalization tokens", "Engagement scoring", "Campaign templates", "A/B testing support"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics on lead quality, conversion rates, and ROI tracking with detailed performance insights.",
      benefits: ["Lead quality scoring", "Conversion tracking", "ROI analytics", "Performance insights"]
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance, data encryption, and regular security audits.",
      benefits: ["SOC 2 compliance", "Data encryption", "Security audits", "Access controls"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Powerful Features for
              <span className="text-primary"> Lead Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Everything you need to build, manage, and optimize your B2B sales pipeline with precision and efficiency.
            </p>
            <Button variant="hero" size="xl" className="animate-fade-in">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-primary transition-all duration-300 animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrates with Your Favorite Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect seamlessly with your existing workflow. Our platform supports 50+ integrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Monday.com", "Slack"].map((tool, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="font-medium text-sm">{tool}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of sales teams who have increased their pipeline by 300% with PerfectDatabase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Book a Demo
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;