import React, { useEffect, useState } from "react";
import { supabase } from "../pages/supabaseClient";

interface Complaint {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  email: string;
  phone: string;
  status: string;
  progress: string | null;
}

const AdminDashboard: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Fetch complaints
  useEffect(() => {
    fetchComplaints();
  }, [selectedCategory]);

  const fetchComplaints = async () => {
    let query = supabase.from("complaints").select("*");

    if (selectedCategory !== "All") {
      query = query.eq("category", selectedCategory);
    }

    const { data, error } = await query.order("id", { ascending: false });

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      setComplaints(data || []);
    }
  };

  // Update status or progress
  const updateComplaint = async (id: number, status: string, progress: string) => {
    const { error } = await supabase
      .from("complaints")
      .update({ status, progress })
      .eq("id", id);

    if (error) {
      alert("❌ Update failed: " + error.message);
    } else {
      alert("✅ Complaint updated!");
      fetchComplaints(); // refresh list
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Filter by Category */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Road Repair">Road Repair</option>
          <option value="Garbage Issue">Garbage Issue</option>
          <option value="Street Light">Street Light</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Drainage Problem">Drainage Problem</option>
        </select>
      </div>

      {/* Complaints Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Progress</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.category}</td>
              <td className="border p-2">{c.location}</td>
              <td className="border p-2">{c.description}</td>
              <td className="border p-2">{c.status}</td>
              <td className="border p-2">{c.progress || "-"}</td>
              <td className="border p-2">
                <button
                  onClick={() =>
                    updateComplaint(c.id, "In Progress", "Work assigned")
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  In Progress
                </button>
                <button
                  onClick={() =>
                    updateComplaint(c.id, "Resolved", "Problem fixed")
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Resolve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
