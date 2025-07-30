import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      price: 49,
      period: "month",
      features: [
        "500 verified leads per month",
        "Basic targeting filters",
        "Email export",
        "Standard support",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing sales teams",
      price: 149,
      period: "month",
      features: [
        "2,500 verified leads per month",
        "Advanced targeting & filters",
        "CRM integrations",
        "Email sequences",
        "Advanced analytics",
        "Priority support",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "Custom",
      period: "",
      features: [
        "Unlimited verified leads",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security",
        "Custom reporting",
        "24/7 support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      category: "Lead Generation",
      features: [
        { name: "Monthly lead credits", starter: "500", professional: "2,500", enterprise: "Unlimited" },
        { name: "Lead verification accuracy", starter: "95%", professional: "98%", enterprise: "99%" },
        { name: "Real-time data updates", starter: "Daily", professional: "Hourly", enterprise: "Real-time" },
        { name: "Bulk export", starter: "✓", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Targeting & Filters",
      features: [
        { name: "Basic filters", starter: "✓", professional: "✓", enterprise: "✓" },
        { name: "Advanced filters", starter: "✗", professional: "✓", enterprise: "✓" },
        { name: "Custom filters", starter: "✗", professional: "✗", enterprise: "✓" },
        { name: "AI-powered targeting", starter: "✗", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Integrations",
      features: [
        { name: "Basic CRM integrations", starter: "3", professional: "15", enterprise: "Unlimited" },
        { name: "Email marketing tools", starter: "✗", professional: "✓", enterprise: "✓" },
        { name: "Custom API access", starter: "✗", professional: "✗", enterprise: "✓" },
        { name: "Webhook support", starter: "✗", professional: "✓", enterprise: "✓" }
      ]
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
              Simple, Transparent
              <span className="text-primary"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Choose the perfect plan for your team. Start free, upgrade when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-primary transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star size={14} />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Compare Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              {comparisonFeatures.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 px-4">
                    {category.category}
                  </h3>
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-4 gap-0">
                      <div className="p-4 bg-muted/50 font-medium text-foreground border-r border-border">
                        Feature
                      </div>
                      <div className="p-4 bg-muted/50 font-medium text-center border-r border-border">
                        Starter
                      </div>
                      <div className="p-4 bg-muted/50 font-medium text-center border-r border-border">
                        Professional
                      </div>
                      <div className="p-4 bg-muted/50 font-medium text-center">
                        Enterprise
                      </div>
                      
                      {category.features.map((feature, featureIndex) => (
                        <>
                          <div key={`${categoryIndex}-${featureIndex}-name`} className="p-4 text-muted-foreground border-r border-border border-t">
                            {feature.name}
                          </div>
                          <div key={`${categoryIndex}-${featureIndex}-starter`} className="p-4 text-center border-r border-border border-t">
                            {feature.starter}
                          </div>
                          <div key={`${categoryIndex}-${featureIndex}-professional`} className="p-4 text-center border-r border-border border-t">
                            {feature.professional}
                          </div>
                          <div key={`${categoryIndex}-${featureIndex}-enterprise`} className="p-4 text-center border-t">
                            {feature.enterprise}
                          </div>
                        </>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
              },
              {
                question: "What happens when I reach my lead limit?",
                answer: "You'll receive notifications as you approach your limit. You can upgrade your plan or purchase additional credits as needed."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, we offer a 14-day free trial with access to all Professional plan features and 100 free leads."
              },
              {
                question: "How accurate is your lead data?",
                answer: "Our lead data maintains 95-99% accuracy depending on your plan, with real-time verification and regular updates."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;