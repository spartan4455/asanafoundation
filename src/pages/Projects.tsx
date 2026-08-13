import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import main images
import foodImage from "@/assets/project-food.jpg";
import educationImage from "@/assets/project-education.jpg";
import shelterImage from "@/assets/project-shelter.jpg";

// Import gallery images (placeholders — replace with real imports)
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

import raf1 from "@/assets/raf1.jpg";
import raf2 from "@/assets/raf2.jpg";
import raf3 from "@/assets/raf3.jpg";
import raf4 from "@/assets/raf4.jpg";
import raf5 from "@/assets/raf5.jpg";
import raf6 from "@/assets/raf6.jpg";
import raf7 from "@/assets/raf7.jpg";
import raf8 from "@/assets/raf8.jpg";

import ed1 from "@/assets/ed1.jpg";
import ed2 from "@/assets/ed2.jpg";
import ed3 from "@/assets/ed3.jpg";
import ed4 from "@/assets/ed4.jpg";
import ed5 from "@/assets/ed5.jpg";
import ed6 from "@/assets/ed6.jpg";
import ed7 from "@/assets/ed7.jpg";
import ed8 from "@/assets/ed8.jpg";

import mu1 from "@/assets/mu1.jpg";
import mu2 from "@/assets/mu2.jpg";
import mu3 from "@/assets/mu3.jpg";
import mu4 from "@/assets/mu4.jpg";
import mu5 from "@/assets/mu5.jpg";
import mu6 from "@/assets/mu6.jpg";
import mu7 from "@/assets/mu7.jpg";
import mu8 from "@/assets/mu8.jpg";

import cl1 from "@/assets/cl1.jpg";
import cl2 from "@/assets/cl2.jpg";
import cl3 from "@/assets/cl3.jpg";
import cl4 from "@/assets/cl4.jpg";
import cl5 from "@/assets/cl5.jpg";
import cl6 from "@/assets/cl6.jpg";
import cl7 from "@/assets/cl7.jpg";
import cl8 from "@/assets/cl8.jpg";
import cl9 from "@/assets/cl9.jpg";
import cl10 from "@/assets/cl10.jpg";
import cl11 from "@/assets/cl11.jpg";
import cl12 from "@/assets/cl12.jpg";

import ha1 from "@/assets/HA1.jpeg";
import ha2 from "@/assets/HA2.jpeg";
import ha3 from "@/assets/HA3.jpeg";
import ha4 from "@/assets/HA4.jpeg";
import ha5 from "@/assets/HA5.jpeg";
import ha6 from "@/assets/HA6.jpeg";
import ha7 from "@/assets/HA7.jpeg";
import ha8 from "@/assets/HA8.jpeg";

import pr1 from "@/assets/PR1.jpeg";
import pr2 from "@/assets/PR2.jpeg";
import pr3 from "@/assets/PR3.jpeg";
import pr4 from "@/assets/PR4.jpeg";
import pr5 from "@/assets/PR5.jpeg";
import pr6 from "@/assets/PR6.jpeg";
import pr7 from "@/assets/PR7.jpeg";
import pr8 from "@/assets/PR8.jpeg";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const projects = [
    {
      title: "Rafikii Orphanage Support",
      image: foodImage,
      gallery: [raf2, raf2, raf3, raf4, raf5, raf6, raf7, raf8],
      description:
        "Providing nutritious meals and food packages to ensure no child goes hungry. We distribute over 1,000 meals monthly to orphanages and vulnerable children in our community.",
      impact: "10,000+ meals donated",
      status: "Ongoing",
    },
    {
      title: "Donation of Educational Materials",
      image: educationImage,
      gallery: [ed1, ed2, ed3, ed4, ed5, ed6, ed7, ed8],
      description:
        "Supplying school materials, uniforms, and educational resources to help children succeed in their studies. We believe education is the key to breaking the cycle of poverty.",
      impact: "500+ children supported",
      status: "Ongoing",
    },
    {
      title: "Donation to the Muslim Community",
      image: shelterImage,
      gallery: [mu1, mu2, mu3, mu4, mu5, mu6, mu7, mu8],
      description:
        "Creating and maintaining safe, loving shelter homes where children can grow up with dignity and care.",
      impact: "3 shelter homes operated",
      status: "Expanding",
    },
    {
      title: "Prisons Donation",
      image: foodImage,
      gallery: [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8],
      description:
        "Ensuring children have access to basic healthcare services, including check-ups, vaccinations, and emergency care.",
      impact: "200+ children covered",
      status: "Ongoing",
    },
    {
      title: "Collaborations at Kumasi",
      image: educationImage,
      gallery: [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10, cl11, cl12],
      description:
        "Providing vocational training and life skills programs for older children to prepare them for independent living.",
      impact: "100+ youth trained",
      status: "New",
    },
    {
      title: "Collaboration with the Health Administration",
      image: shelterImage,
      gallery: [ha1, ha2, ha3, ha4, ha5, ha6, ha7, ha8],
      description:
        "Organizing community events, awareness campaigns, and volunteer programs to build strong support networks.",
      impact: "150+ volunteers engaged",
      status: "Ongoing",
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
              Our Projects
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the initiatives transforming lives and building brighter futures for children.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="text-center">
              <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
                {project.title}
              </h2>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => {
                      setActiveImage(img);
                      setOpen(true);
                    }}
                    alt={`${project.title} image ${i + 1}`}
                    className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent
    className="p-0 max-w-4xl w-full max-h-[90vh] overflow-auto bg-background rounded-lg"
  >
    {activeImage && (
      <img
        src={activeImage}
        alt="Preview"
        className="w-full h-auto object-contain"
      />
    )}
  </DialogContent>
</Dialog>



      <Footer />
    </div>
  );
};

export default Projects;
