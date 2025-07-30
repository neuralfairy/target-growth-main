import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to B2B Lead Scoring in 2024",
    excerpt: "Learn how to implement an effective lead scoring system that increases conversion rates by 300%. Includes templates, best practices, and real case studies.",
    category: "Lead Generation",
    readTime: "12 min read",
    date: "Dec 15, 2024",
    image: "featured",
    author: "Sarah Johnson"
  };

  const blogPosts = [
    {
      title: "10 Advanced LinkedIn Prospecting Strategies That Actually Work",
      excerpt: "Discover proven techniques to find and connect with high-quality prospects on LinkedIn, including message templates and automation tips.",
      category: "Prospecting",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      author: "Michael Chen"
    },
    {
      title: "GDPR Compliance for B2B Lead Generation: What You Need to Know",
      excerpt: "A comprehensive guide to collecting and using lead data while staying compliant with GDPR, CCPA, and other privacy regulations.",
      category: "Compliance",
      readTime: "15 min read",
      date: "Dec 10, 2024",
      author: "Emily Rodriguez"
    },
    {
      title: "How to Build a High-Converting Sales Funnel in 2024",
      excerpt: "Step-by-step guide to creating sales funnels that convert leads into customers, with optimization tips and conversion benchmarks.",
      category: "Sales Strategy",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      author: "David Kim"
    },
    {
      title: "The ROI of Intent Data: Measuring What Matters",
      excerpt: "Learn how to calculate and optimize the return on investment from intent data platforms and behavioral targeting.",
      category: "Analytics",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      author: "Sarah Johnson"
    },
    {
      title: "Email Deliverability Best Practices for Cold Outreach",
      excerpt: "Ensure your cold emails reach the inbox with these proven strategies for improving deliverability and sender reputation.",
      category: "Email Marketing",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      author: "Michael Chen"
    },
    {
      title: "Account-Based Marketing vs. Lead Generation: Which is Right for You?",
      excerpt: "Compare ABM and traditional lead generation strategies to determine the best approach for your B2B business goals.",
      category: "Strategy",
      readTime: "11 min read",
      date: "Nov 30, 2024",
      author: "Emily Rodriguez"
    }
  ];

  const categories = [
    { name: "Lead Generation", count: 15, icon: Target },
    { name: "Sales Strategy", count: 12, icon: TrendingUp },
    { name: "Prospecting", count: 8, icon: Users },
    { name: "Analytics", count: 6, icon: BarChart3 },
    { name: "Email Marketing", count: 5, icon: Users },
    { name: "Compliance", count: 4, icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              B2B Sales
              <span className="text-primary"> Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Expert strategies, case studies, and actionable insights to accelerate your B2B lead generation and sales success.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-primary transition-all duration-300 cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gradient-primary flex items-center justify-center">
                    <div className="text-primary-foreground text-center">
                      <BarChart3 size={48} className="mx-auto mb-2" />
                      <p className="text-sm">Featured Article</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <Badge variant="secondary" className="mr-3">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {featuredPost.author}</span>
                    <Button variant="outline">Read More</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="flex items-center justify-between hover:text-primary cursor-pointer transition-colors">
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Get weekly insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Your email address" 
                  className="bg-background text-foreground border-background"
                />
                <Button variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Popular This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
                    <h4 className="font-medium text-sm text-foreground hover:text-primary cursor-pointer transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply These Strategies?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start implementing these proven lead generation techniques with PerfectDatabase today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Start Free Trial
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;