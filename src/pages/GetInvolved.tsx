import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, HandHeart, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpType: "volunteer",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: "We've received your request and will contact you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      helpType: "volunteer",
      message: "",
    });
  };

  const ways = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact on children's lives.",
    },
    {
      icon: HandHeart,
      title: "Sponsor a Child",
      description: "Provide ongoing support to a specific child through our sponsorship program.",
    },
    {
      icon: Calendar,
      title: "Organize Events",
      description: "Help us organize fundraising events and awareness campaigns in your community.",
    },
    {
      icon: MessageSquare,
      title: "Spread the Word",
      description: "Share our mission on social media and help us reach more potential supporters.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              Get Involved
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              There are many ways you can contribute to our mission. Together, we can create lasting change in children's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ways.map((way, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <way.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">{way.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-border shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading text-3xl text-foreground text-center">
                  Join Our Community
                </CardTitle>
                <p className="text-center font-body text-muted-foreground mt-2">
                  Fill out the form below and we'll get in touch with you about how you can help.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-heading text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 font-body"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-heading text-base">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 font-body"
                        placeholder="0XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-heading text-base">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 font-body"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label className="font-heading text-base mb-3 block">
                      How would you like to help? *
                    </Label>
                    <RadioGroup 
                      value={formData.helpType} 
                      onValueChange={(value) => setFormData({ ...formData, helpType: value })}
                    >
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="volunteer" id="volunteer" />
                        <Label htmlFor="volunteer" className="font-body cursor-pointer flex-1">
                          Volunteer my time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="sponsor" id="sponsor" />
                        <Label htmlFor="sponsor" className="font-body cursor-pointer flex-1">
                          Sponsor a child
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="organize" id="organize" />
                        <Label htmlFor="organize" className="font-body cursor-pointer flex-1">
                          Organize events
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-body cursor-pointer flex-1">
                          Other ways to help
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-heading text-base">
                      Tell us more about yourself (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 font-body min-h-32"
                      placeholder="Share your interests, skills, or questions..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full text-lg py-6">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Every Effort Counts
          </h2>
          <p className="font-body text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you volunteer once a month or sponsor a child's education, your contribution creates ripples of positive change.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
