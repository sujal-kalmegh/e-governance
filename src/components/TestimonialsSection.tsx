import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Local Resident",
    image: "SC",
    content: "I reported a broken streetlight and it was fixed within 3 days! The real-time updates made all the difference. Finally, a government service that works.",
    rating: 5,
    issue: "Street Light Repair"
  },
  {
    name: "Marcus Johnson",
    role: "Business Owner",
    image: "MJ",
    content: "The AI helped me write a clear complaint about noise issues. The resolution was fair and quick. This platform actually listens to citizens.",
    rating: 5,
    issue: "Noise Complaint"
  },
  {
    name: "Elena Rodriguez",
    role: "Community Advocate",
    image: "ER",
    content: "Love the transparency! I can see exactly what's happening in my neighborhood and track progress on multiple issues. This is how government should work.",
    rating: 5,
    issue: "Multiple Issues"
  },
  {
    name: "David Park",
    role: "Senior Citizen",
    image: "DP",
    content: "The voice input feature was perfect for me. I just spoke my concern and everything was handled professionally. Amazing service!",
    rating: 5,
    issue: "Accessibility Request"
  },
  {
    name: "Amy Foster",
    role: "Young Professional",
    image: "AF",
    content: "Got SMS updates throughout the process. My pothole complaint was resolved in record time. This is the future of citizen services.",
    rating: 5,
    issue: "Road Repair"
  },
  {
    name: "Robert Kim",
    role: "Parent",
    image: "RK",
    content: "Reported unsafe playground equipment and got immediate response. The safety of our children was taken seriously. Highly recommend!",
    rating: 5,
    issue: "Safety Concern"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Stories from Real Citizens
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear how CitizenVoice has helped community members get their voices heard and problems solved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-testimonial group hover-lift"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-6 h-6 text-primary/60" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-hover rounded-xl flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="inline-flex items-center mt-1 px-2 py-1 bg-accent/50 rounded-md text-xs text-accent-foreground">
                    {testimonial.issue}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-card border border-border/50 rounded-2xl px-8 py-6 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">12,000+</div>
              <div className="text-sm text-muted-foreground">Happy Citizens</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">89%</div>
              <div className="text-sm text-muted-foreground">Issues Resolved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;