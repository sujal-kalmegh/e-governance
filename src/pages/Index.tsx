import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComplaintMapSection from "@/components/ComplaintMapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { supabase } from "./supabaseClient";

const Index = () => {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("grievances")
      .insert([{ name, issue }]);

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      alert("✅ Grievance submitted successfully!");
      setName("");
      setIssue("");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-6 flex justify-center space-x-4">
        <Link to="/book-complaint">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Book Complaint
          </button>
        </Link>
        <Link to="/track-complaint">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
            Track Complaint
          </button>
        </Link>
      </div>
      {/* Top Book Complaint Button */}
      

      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ComplaintMapSection />
        <TestimonialsSection />

        {/* Grievance Form */}
        <section className="p-6 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Submit Grievance</h1>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Your Issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
