import React from 'react';
import { Bot, Mic, MapPin, Eye, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI-Powered Drafting",
    description: "Smart assistance helps you write clear, effective complaints. Get suggestions for better outcomes.",
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: Mic,
    title: "Voice Input",
    description: "Can't type? No problem. Record your complaint and we'll transcribe it accurately for you.",
    gradient: "from-success/10 to-success/5"
  },
  {
    icon: MapPin,
    title: "Location Mapping",
    description: "Automatically detect and map your issue location. Help departments find and fix problems faster.",
    gradient: "from-warning/10 to-warning/5"
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "See exactly who's handling your case, current status, and expected resolution timeline.",
    gradient: "from-accent/20 to-accent/10"
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your personal information is secure. Complaints can be filed anonymously when needed.",
    gradient: "from-muted to-muted/50"
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get updates via SMS, email, or push notifications. Never wonder about your complaint status again.",
    gradient: "from-primary/15 to-success/10"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features That Work For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technology meets citizen needs. We've built features that make government services accessible, transparent, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-feature bg-gradient-to-br ${feature.gradient} hover-lift group`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-hover rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border/50 rounded-3xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Experience Better Government Services?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of citizens who are already using CitizenVoice to make their voices heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Get Started Today
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;