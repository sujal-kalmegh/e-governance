import React, { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "./supabaseClient";

interface ComplaintForm {
  category: string;
  ward: string;
  description: string;
  email: string;
  phone: string;
}

const BookComplaint: React.FC = () => {
  const [form, setForm] = useState<ComplaintForm>({
    category: "",
    ward: "",
    description: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("complaints").insert([
      {
        category: form.category,
        ward: form.ward,
        issue: form.description,
        email: form.email || null,
        phone: form.phone || null,
      },
    ]);

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      alert("✅ Complaint submitted successfully!");
      setForm({
        category: "",
        ward: "",
        description: "",
        email: "",
        phone: "",
      }); // Reset form
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Book Your Complaint
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter category"
              required
            />
          </div>

          {/* Ward */}
          <div>
            <label className="block font-medium mb-1">Ward</label>
            <input
              type="text"
              name="ward"
              value={form.ward}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter ward number"
              required
            />
          </div>

          {/* Description / Issue */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-2 rounded h-32"
              placeholder="Enter complaint details"
              required
            ></textarea>
          </div>

          {/* Optional: Email */}
          <div>
            <label className="block font-medium mb-1">Email (Optional)</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* Optional: Phone */}
          <div>
            <label className="block font-medium mb-1">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition-colors"
          >
            {loading ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default BookComplaint;
