import React from 'react';
import { FileText, Search, Users, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "File Your Complaint",
    description: "Submit your concern through our simple form, voice input, or photo upload. AI helps draft your complaint clearly.",
    color: "from-primary to-primary-hover"
  },
  {
    icon: Search,
    title: "Track Progress",
    description: "Get real-time updates via SMS, email, or our portal. See exactly who's handling your case and when.",
    color: "from-success to-success/80"
  },
  {
    icon: Users,
    title: "Get Resolution",
    description: "Our team works with local departments to address your concern. Most issues resolved within 7 days.",
    color: "from-warning to-warning/80"
  },
  {
    icon: MessageCircle,
    title: "Share Feedback",
    description: "Rate your experience and help us improve. Your feedback makes the system better for everyone.",
    color: "from-accent-foreground to-accent-foreground/80"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process that puts citizens first. From filing to resolution, we keep you informed every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number & Icon */}
              <div className="relative mb-6">
                <div className={`step-indicator bg-gradient-to-r ${step.color} mx-auto`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 translate-y-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-card border border-border/50 rounded-2xl shadow-soft">
            <span className="text-muted-foreground mr-3">Ready to get started?</span>
            <button className="btn-hero text-sm px-4 py-2">
              File Complaint Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;