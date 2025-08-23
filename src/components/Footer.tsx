import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-background/20 to-background/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-background">CitizenVoice</h3>
                <p className="text-sm text-background/70">Your Voice Matters</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering citizens with a modern, transparent way to engage with government services and create positive change in their communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">File Complaint</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Track Status</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Browse Issues</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community Map</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">User Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Report Issue</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/60" />
                <span className="text-background/80">1-800-CITIZEN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60" />
                <span className="text-background/80">help@citizenvoice.gov</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background/60 mt-0.5" />
                <span className="text-background/80">
                  123 Government Plaza<br />
                  City Hall, State 12345
                </span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-background/10 rounded-lg">
              <h5 className="font-semibold text-background mb-2">Office Hours</h5>
              <p className="text-sm text-background/80">
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 2:00 PM<br />
                Sun: Emergency Only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-background/80 text-sm">
                © 2024 CitizenVoice. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">Accessibility</a>
              </div>
            </div>
            <div className="text-sm text-background/60">
              Powered by modern technology, driven by citizen needs
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;