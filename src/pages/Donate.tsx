import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Award, Smartphone } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              Make a Donation
            </h1>

            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generosity transforms lives. Every donation helps us provide
              food, education, and shelter to children in need.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* MTN MoMo Donation Information */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20 shadow-xl overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-heading text-3xl md:text-4xl text-foreground">
                    Support Our Cause ❤️
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-6 md:px-12 pb-12">
                  <div className="bg-muted rounded-2xl p-8 md:p-12 border border-primary/10">

                    <Smartphone className="h-12 w-12 mx-auto mb-6 text-primary" />

                    <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-8">
                      DONATE THROUGH MTN MOMO
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <p className="font-body text-lg text-muted-foreground mb-2">
                          MTN MoMo Number
                        </p>

                        <p className="font-heading font-bold text-2xl md:text-4xl text-primary tracking-wide">
                          233 242 600 143
                        </p>
                      </div>

                      <div className="border-t border-border pt-6">
                        <p className="font-body text-lg text-muted-foreground mb-2">
                          MoMo Name
                        </p>

                        <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                          ISREAL AKYEA
                        </p>
                      </div>
                    </div>

                    <p className="mt-8 font-body text-base md:text-lg text-muted-foreground">
                      Every contribution, no matter the amount, makes a
                      meaningful difference in the lives of vulnerable
                      children.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Your Impact ❤️
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-body text-sm space-y-3">
                  <p>
                    <strong>GHS 50</strong> - Provides meals for one child for
                    a week
                  </p>

                  <p>
                    <strong>GHS 100</strong> - Supplies school materials for
                    one child
                  </p>

                  <p>
                    <strong>GHS 250</strong> - Covers healthcare for one child
                    for a month
                  </p>

                  <p>
                    <strong>GHS 500+</strong> - Supports shelter care for one
                    child
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Your Support Matters
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-body text-sm text-muted-foreground">
                  Your donation helps us provide essential support, care,
                  education, food, and opportunities to vulnerable children.
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Thank You
                  </CardTitle>
                </CardHeader>

                <CardContent className="font-body text-sm text-muted-foreground">
                  We sincerely appreciate your generosity and commitment to
                  making a positive difference in the lives of children.
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;