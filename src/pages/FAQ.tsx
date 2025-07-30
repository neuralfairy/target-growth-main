import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How quickly can I start generating leads?",
          answer: "You can start generating leads within 15 minutes of signing up. Our onboarding process is designed to be fast and intuitive. Simply create your account, set your targeting criteria, and start downloading your first leads immediately."
        },
        {
          question: "Do I need technical expertise to use PerfectDatabase?",
          answer: "Not at all! PerfectDatabase is designed for sales professionals and marketers, not technical experts. Our interface is intuitive and user-friendly. We also provide comprehensive tutorials and our support team is always ready to help."
        },
        {
          question: "What's included in the free trial?",
          answer: "Your 14-day free trial includes access to all Professional plan features, 100 free verified leads, CRM integrations, advanced targeting, and priority support. No credit card required to start."
        },
        {
          question: "Can I import my existing leads?",
          answer: "Yes, you can easily import your existing leads using our CSV import feature. Our system will automatically verify and enhance your existing data with additional contact information and company details."
        }
      ]
    },
    {
      title: "Lead Quality & Data",
      questions: [
        {
          question: "How accurate is your lead data?",
          answer: "Our lead data maintains 95-99% accuracy depending on your plan. We use real-time verification, multiple data sources, and AI-powered validation to ensure the highest quality. All email addresses are verified before delivery."
        },
        {
          question: "How often is your database updated?",
          answer: "Our database is updated continuously. Professional plan users get hourly updates, while Enterprise customers receive real-time updates. We monitor job changes, company updates, and contact information changes across all our data sources."
        },
        {
          question: "What sources do you use for lead data?",
          answer: "We aggregate data from 200+ verified sources including professional networks, company websites, public records, and social media platforms. All data is ethically sourced and complies with GDPR, CCPA, and other privacy regulations."
        },
        {
          question: "Can I verify the quality of leads before purchasing?",
          answer: "Absolutely! During your free trial, you can test our lead quality with 100 complimentary verified leads. This allows you to evaluate the accuracy and relevance for your specific use case before committing to a paid plan."
        }
      ]
    },
    {
      title: "Targeting & Filtering",
      questions: [
        {
          question: "What targeting options are available?",
          answer: "You can target leads by industry, company size, job title, location, technology stack, company revenue, employee count, and many other criteria. Professional and Enterprise plans include advanced filters like buying intent signals and technographic data."
        },
        {
          question: "Can I target specific companies?",
          answer: "Yes! You can upload a list of target companies or use our company search feature. Our account-based prospecting tools allow you to find multiple contacts within specific organizations and track company changes."
        },
        {
          question: "How do intent signals work?",
          answer: "Our AI analyzes online behavior, content consumption, and buying signals to identify prospects who are actively researching solutions like yours. Intent data is available on Professional and Enterprise plans and can increase conversion rates by 3x."
        },
        {
          question: "Can I save and reuse targeting criteria?",
          answer: "Yes, you can save your targeting criteria as templates for future searches. This is especially useful for ongoing campaigns or when you need to consistently generate leads with the same parameters."
        }
      ]
    },
    {
      title: "Integrations & Export",
      questions: [
        {
          question: "Which CRM systems do you integrate with?",
          answer: "We integrate with 50+ CRM systems including Salesforce, HubSpot, Pipedrive, Zoho, Monday.com, and many others. New integrations are added regularly based on customer requests."
        },
        {
          question: "Can I export leads to CSV?",
          answer: "Yes, all plans include CSV export functionality. You can customize which fields to include and format the export to match your existing workflows or other tools you're using."
        },
        {
          question: "How does the CRM sync work?",
          answer: "Our CRM sync is bi-directional and happens in real-time. New leads are automatically added to your CRM with all relevant contact and company information. Updates flow both ways to keep your data synchronized."
        },
        {
          question: "Do you offer API access?",
          answer: "API access is available on our Enterprise plan. Our RESTful API allows you to integrate PerfectDatabase directly into your existing applications and workflows. Full documentation and support are provided."
        }
      ]
    },
    {
      title: "Compliance & Security",
      questions: [
        {
          question: "Is PerfectDatabase GDPR compliant?",
          answer: "Yes, we are fully GDPR compliant. We only collect and process data with proper legal basis, provide opt-out mechanisms, and maintain detailed records of data processing activities. All data is encrypted and stored securely."
        },
        {
          question: "How do you handle data security?",
          answer: "We maintain enterprise-grade security with SOC 2 Type II compliance, AES-256 encryption, secure API access, regular security audits, and strict access controls. Your data is protected with the highest industry standards."
        },
        {
          question: "Can leads opt out of your database?",
          answer: "Yes, we provide multiple opt-out mechanisms and honor all requests immediately. We also maintain suppression lists and respect Do Not Contact preferences across all our data sources."
        },
        {
          question: "Do you support CCPA and other privacy laws?",
          answer: "We comply with CCPA, CAN-SPAM, and other applicable privacy laws worldwide. Our legal team continuously monitors regulatory changes to ensure ongoing compliance across all jurisdictions where we operate."
        }
      ]
    },
    {
      title: "Billing & Plans",
      questions: [
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. Unused credits from higher plans roll over when you upgrade within the same billing cycle."
        },
        {
          question: "What happens when I reach my lead limit?",
          answer: "You'll receive notifications as you approach your monthly limit. You can either upgrade your plan or purchase additional lead credits. We'll never cut off your access - you can always upgrade to continue generating leads."
        },
        {
          question: "Do you offer annual discounts?",
          answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. Enterprise customers can also discuss custom pricing based on volume and specific requirements."
        },
        {
          question: "Is there a cancellation fee?",
          answer: "No cancellation fees or long-term contracts. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email"
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse our knowledge base",
      action: "Visit Help Center"
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
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Find answers to common questions about PerfectDatabase. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our support team is here to help you succeed. Choose the best way to get in touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Help */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Can't Find Your Answer?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Use our advanced search to find specific topics or contact support directly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Button variant="secondary" size="lg" className="flex-1">
                  Search Help Center
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;