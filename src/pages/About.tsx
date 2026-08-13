import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              About Asana's Foundation
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to transforming lives and bringing hope to orphans and vulnerable children across our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h2>
                <p className="font-body text-muted-foreground">
                  To provide comprehensive care, support, and opportunities for orphans and vulnerable children, ensuring they grow up in a loving, nurturing environment with access to education, healthcare, and basic necessities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h2>
                <p className="font-body text-muted-foreground">
                  A world where every child, regardless of their circumstances, has the opportunity to thrive, dream, and reach their full potential in a community that cares.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">Core Values</h2>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li>• Compassion & Love</li>
                  <li>• Integrity & Trust</li>
                  <li>• Community & Unity</li>
                  <li>• Hope & Empowerment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quranic Inspiration */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-8">Our Inspiration</h2>
            <div className="text-5xl mb-6">"</div>
            <blockquote className="font-body text-2xl md:text-3xl mb-6 italic">
              Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?
            </blockquote>
            <cite className="font-heading text-lg opacity-90">— Qur'an 2:245</cite>
            <p className="font-body text-lg mt-8 opacity-90">
              This verse inspires our work, reminding us that every act of kindness and generosity is an investment in a better future, blessed and multiplied beyond measure.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl text-center mb-12 text-foreground">
              Our Story
            </h2>
            <div className="font-body text-lg text-muted-foreground space-y-6">
              <p>
                Asana's Foundation was born from a deep desire to make a tangible difference in the lives of vulnerable children. Our founder witnessed firsthand the struggles faced by orphans and children in need, and felt a calling to create a sanctuary of hope and opportunity.
              </p>
              <p>
                What started as a small initiative to provide meals to a local orphanage has grown into a comprehensive program that touches the lives of hundreds of children. We've expanded our reach to include educational support, healthcare assistance, and shelter care.
              </p>
              <p>
                Today, Asana's Foundation stands as a beacon of hope in our community, powered by the generosity of donors and the dedication of our volunteers. Every child we support is a testament to what we can achieve when we come together with compassion and purpose.
              </p>
              <p className="font-semibold text-foreground">
                We believe that every child deserves love, care, and the opportunity to dream. Together, we're making that belief a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
