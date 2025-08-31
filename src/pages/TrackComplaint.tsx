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

  // Function to calculate progress and status dynamically
  const getProgress = (createdAt: string) => {
    const created = new Date(createdAt).getTime();
    const now = Date.now();
    const diffHours = (now - created) / (1000 * 60 * 60);

    if (diffHours < 1) return { status: "Pending", progress: 20 };
    if (diffHours < 3) return { status: "In Progress", progress: 60 };
    return { status: "Completed", progress: 100 };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Track Your Complaint
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-5 space-y-4">
          <input
            type="number"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            placeholder="Enter Complaint ID"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleTrack}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors font-semibold"
          >
            {loading ? "Loading..." : "Track Complaint"}
          </button>
        </div>

        {complaint && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              Complaint Details
            </h2>
            <p className="mb-2">
              <strong>ID:</strong> {complaint.id}
            </p>
            <p className="mb-2">
              <strong>Category:</strong> {complaint.category}
            </p>
            <p className="mb-2">
              <strong>Location / Adddress:</strong> {complaint.ward}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {complaint.issue}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {complaint.email || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {complaint.phone || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Priority:</strong> {complaint.priority}
            </p>
            <p className="mb-2">
              <strong>Submitted At:</strong>{" "}
              {new Date(complaint.created_at).toLocaleString()}
            </p>

            {/* Dynamic Status & Progress */}
            <div className="mt-6">
              {(() => {
                const { status, progress } = getProgress(
                  complaint.created_at
                );
                return (
                  <>
                    <p className="text-lg font-semibold mb-2">
                      Status: <span className="text-blue-600">{status}</span>
                    </p>
                    
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TrackComplaint;
