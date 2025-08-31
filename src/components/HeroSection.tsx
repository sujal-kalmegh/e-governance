import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-success/5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-full text-accent-foreground font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Trusted by 500,000+ Citizens
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Your Voice
                <span className="text-primary block">Matters</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                File complaints, track progress, and get real solutions. A government portal that actually listens and responds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-complaint">
                <button className="btn-secondary">
                  File Complaint
                </button>
              </Link>
              <Button variant="outline" className="btn-hero group">
                <FileText className="w-5 h-5 mr-2" />
                Browse Issues
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24hrs</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">89%</div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-8">
            <div className="relative rounded-3xl overflow-hidden shadow-large animate-float">
              <img
                src={heroImage}
                alt="Citizens engaging with government services in a friendly, modern setting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-xl shadow-medium animate-bounce">
              <Clock className="w-4 h-4 inline mr-2" />
              Live Tracking
            </div>
            <div className="absolute -bottom-4 -right-4 bg-warning text-warning-foreground px-4 py-2 rounded-xl shadow-medium animate-bounce" style={{ animationDelay: '1s' }}>
              <CheckCircle className="w-4 h-4 inline mr-2" />
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;