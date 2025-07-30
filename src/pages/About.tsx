import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, Linkedin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at Salesforce with 15+ years in B2B lead generation. Passionate about helping sales teams achieve their full potential.",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google engineer specializing in machine learning and data analytics. Built the AI engine that powers our lead scoring system.",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "10+ years in customer success and sales operations. Ensures our clients achieve maximum ROI from their lead generation efforts.",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Head of Data Science",
      bio: "PhD in Computer Science from Stanford. Leads our data verification and AI targeting initiatives with a focus on accuracy and compliance.",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision First",
      description: "We believe in quality over quantity. Every lead we deliver is thoroughly verified and targeted to match your ideal customer profile."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve measurable growth in your sales pipeline."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We constantly evolve our technology and processes to stay ahead of market changes and deliver better results."
    },
    {
      icon: Award,
      title: "Ethical Practices",
      description: "We maintain the highest standards of data privacy, compliance, and ethical business practices in everything we do."
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
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Revolutionizing B2B
              <span className="text-primary"> Lead Generation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Founded in 2020 in Tucson, Arizona, PerfectDatabase Solutions has helped thousands of B2B companies transform their sales pipelines with precision-targeted lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that every B2B company deserves access to high-quality, verified leads that actually convert. 
              Traditional lead generation methods are broken - they're inefficient, inaccurate, and waste valuable time. 
              That's why we built PerfectDatabase Solutions: to provide intelligent, data-driven lead generation that 
              actually works.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform combines advanced targeting algorithms with real-time data verification to 
              deliver leads that are not just numerous, but truly qualified and ready to engage with your sales team.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders from top tech companies, united by a passion for transforming B2B sales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin size={16} className="mr-1" />
                    Connect
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Journey
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    Started in Tucson, Arizona with a mission to solve the broken lead generation industry. 
                    Our founders, frustrated with existing solutions, set out to build something better.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI Engine Launch</h3>
                  <p className="text-muted-foreground">
                    Launched our proprietary AI-powered targeting and verification system, achieving 95% lead accuracy 
                    and helping our first 1,000 customers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Series A Funding</h3>
                  <p className="text-muted-foreground">
                    Raised $10M Series A to expand our team and enhance our platform. Reached 10,000 active users 
                    and 5M leads generated.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Market Leadership</h3>
                  <p className="text-muted-foreground">
                    Today, we serve 50,000+ users worldwide, maintain 98% data accuracy, and have helped generate 
                    over 10 million qualified leads for B2B companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;