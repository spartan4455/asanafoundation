import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-children.jpg";

const Home = () => {
  const stats = [
    { icon: Heart, label: "Children Supported", value: "500+" },
    { icon: Users, label: "Volunteers", value: "150+" },
    { icon: HandHeart, label: "Meals Donated", value: "100+" },
    { icon: BookOpen, label: "School Supplies", value: "2,000+" },
  ];

  const features = [
    {
      title: "Food Support",
      description: "Providing nutritious meals to ensure children grow healthy and strong.",
      icon: Heart,
    },
    {
      title: "Education",
      description: "Supplying school materials and supporting children's education journey.",
      icon: BookOpen,
    },
    {
      title: "Shelter Care",
      description: "Creating safe, loving environments where children can thrive.",
      icon: Users,
    },
    {
      title: "Community",
      description: "Building a supportive community that cares for every child's wellbeing.",
      icon: HandHeart,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
            Put Smile on Their Face
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
            Join us in transforming the lives of orphans and vulnerable children through love, care, and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-heading font-bold text-4xl text-foreground mb-2">{stat.value}</div>
                <div className="font-body text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              How We Help
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every child receives the care and support they deserve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="font-body text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Every Child Deserves Love
          </h2>
          <p className="font-body text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your donation can change a life. Join us today in bringing hope and happiness to children in need.
          </p>
          <Button variant="donate" size="lg" className="shadow-2xl" asChild>
            <Link to="/donate">Make a Difference Today</Link>
          </Button>
        </div>
      </section>

      {/* Quranic Verse Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6 text-primary">"</div>
            <blockquote className="font-body text-2xl md:text-3xl text-foreground mb-6 italic">
              Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?
            </blockquote>
            <cite className="font-heading text-lg text-muted-foreground">— Qur'an 2:245</cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
