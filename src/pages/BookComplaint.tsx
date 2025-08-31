import React, { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "./supabaseClient";

interface ComplaintForm {
  name: string;
  category: string;
  ward: string;
  description: string;
  email: string;
  phone: string;
}

const BookComplaint: React.FC = () => {
  const [form, setForm] = useState<ComplaintForm>({
    name: "",
    category: "",
    ward: "",
    description: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [trackingId, setTrackingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTrackingId(null);

    try {
      const { data, error } = await supabase
        .from("complaints")
        .insert([
          {
            name: form.name,
            category: form.category,
            ward: form.ward,
            description: form.description,
            email: form.email || null,
            phone: form.phone || null,
          },
        ])
        .select("id")
        .single();

      if (error) throw new Error(error.message);

      if (data?.id) {
        setTrackingId(data.id);
        setForm({ name: "", category: "", ward: "", description: "", email: "", phone: "" });
      }
    } catch (err: any) {
      alert("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 animate-pulse">
          Book Your Complaint
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-blue-500 transition-shadow duration-500"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Enter complaint category"
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Ward / Address */}
          <div>
            <label className="block font-medium mb-1">Location / Address</label>
            <input
              type="text"
              name="ward"
              value={form.ward}
              onChange={handleChange}
              placeholder="Enter location or ward"
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter complaint details"
              className="w-full border-2 border-blue-300 p-3 rounded-lg h-32 focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:border-blue-500 outline-none transition duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>

        {/* Tracking ID message */}
        {trackingId && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-400 rounded text-blue-700 text-center text-lg font-semibold animate-pulse">
            Your complaint has been submitted! Your tracking ID is: <strong>{trackingId}</strong>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BookComplaint;
