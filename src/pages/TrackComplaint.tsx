import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "./supabaseClient";

const TrackComplaint: React.FC = () => {
  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!complaintId) return alert("Enter Complaint ID");
    setLoading(true);

    const { data, error } = await supabase
      .from("complaints")
      .select("*")
      .eq("id", complaintId)
      .single();

    if (error) {
      alert("❌ Error: " + error.message);
      setComplaint(null);
    } else {
      setComplaint(data);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Track Your Complaint
        </h1>

        <div className="space-y-4">
          <input
            type="number"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            placeholder="Enter Complaint ID"
            className="w-full border p-2 rounded"
          />
          <button
            onClick={handleTrack}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition-colors"
          >
            {loading ? "Loading..." : "Track Complaint"}
          </button>
        </div>

        {complaint && (
          <div className="mt-6 p-4 border rounded bg-white">
            <h2 className="font-bold mb-2">Complaint Details</h2>
            <p>
              <strong>ID:</strong> {complaint.id}
            </p>
            <p>
              <strong>Category:</strong> {complaint.category}
            </p>
            <p>
              <strong>Ward:</strong> {complaint.ward}
            </p>
            <p>
              <strong>Description:</strong> {complaint.issue}
            </p>
            <p>
              <strong>Email:</strong> {complaint.email || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {complaint.phone || "N/A"}
            </p>
            <p>
              <strong>Priority:</strong> {complaint.priority}
            </p>
            <p>
              <strong>Submitted At:</strong>{" "}
              {new Date(complaint.created_at).toLocaleString()}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TrackComplaint;
