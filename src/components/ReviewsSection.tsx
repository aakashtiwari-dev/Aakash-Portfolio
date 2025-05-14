
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      rating: 5,
      comment: "Working with this team was a game-changer for my online store. Their attention to detail and technical expertise transformed my website, resulting in a 40% increase in sales within just two months!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Mark Thompson",
      role: "Startup Founder",
      rating: 5,
      comment: "I needed a website that could grow with my business. They delivered a scalable solution that's both beautiful and functional. The responsive design works flawlessly across all devices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      rating: 4,
      comment: "The team went above and beyond to understand our brand vision. Their pixel-perfect implementation and creative solutions exceeded our expectations. Highly recommended!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-purple/20 px-4 py-2 rounded-lg mb-4">
            <h2 className="font-pixel text-pixel-purple text-sm">TESTIMONIALS</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-pixel-purple">Reviews</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <Card key={index} className="pixel-card hover:border-pixel-purple/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-pixel-purple">
                    <AspectRatio ratio={1} className="bg-muted">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="object-cover"
                        loading="lazy" 
                      />
                    </AspectRatio>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-muted-foreground text-sm">{review.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-pixel-yellow fill-pixel-yellow" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="section-divider mt-16"></div>
    </section>
  );
};

export default ReviewsSection;
