import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { GoogleMap, MarkerF, useJsApiLoader, InfoWindowF } from "@react-google-maps/api";
import { supabase } from "../pages/supabaseClient";

interface Complaint {
  id: number;
  type: string;
  status: "resolved" | "in-progress" | "new";
  location: string;
  time: string;
  lat: number;
  lng: number;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "resolved":
      return "text-success bg-success/10";
    case "in-progress":
      return "text-warning bg-warning/10";
    case "new":
      return "text-primary bg-primary/10";
    default:
      return "text-muted-foreground bg-muted";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "resolved":
      return CheckCircle;
    case "in-progress":
      return Clock;
    case "new":
      return AlertCircle;
    default:
      return Clock;
  }
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "320px",
  borderRadius: "1rem",
};

const center = {
  lat: 21.1466, // Nagpur center
  lng: 79.0888,
};

const ComplaintMapSection = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [selectedComplaint, setSelectedComplaint] = useState<number | null>(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  // Fetch complaints from Supabase
  useEffect(() => {
    const fetchComplaints = async () => {
      const { data, error } = await supabase.from("complaints").select("*");
      if (error) {
        console.error("Error fetching complaints:", error.message);
        return;
      }

      // Map the data to include lat/lng numbers if they are stored as text
      const mapped = data.map((c: any) => ({
        id: c.id,
        type: c.category,
        status: c.status || "new",
        location: c.ward,
        time: c.created_at ? new Date(c.created_at).toLocaleString() : "Unknown",
        lat: Number(c.lat) || 21.1466, // fallback to center
        lng: Number(c.lng) || 79.0888,
      }));
      setComplaints(mapped);
    };

    fetchComplaints();
  }, []);

  if (loadError) return <div>Error loading Google Maps</div>;

  return (
    <section id="complaints" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Live Complaint Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time transparency in action. See what issues are being reported and resolved in your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-card border border-border/50 rounded-3xl p-8 shadow-medium">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Community Map</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Resolved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="text-muted-foreground">In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">New</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    options={{
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}
                  >
                    {complaints.map((complaint) => (
                      <MarkerF
                        key={complaint.id}
                        position={{ lat: complaint.lat, lng: complaint.lng }}
                        icon={{
                          path: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z",
                          fillColor:
                            complaint.status === "resolved"
                              ? "#16a34a"
                              : complaint.status === "in-progress"
                              ? "#ea580c"
                              : "#2563eb",
                          fillOpacity: 1,
                          strokeWeight: 0,
                          scale: 2,
                          anchor: new google.maps.Point(12, 24),
                        }}
                        onClick={() => setSelectedComplaint(complaint.id)}
                      />
                    ))}

                    {selectedComplaint && (
                      <InfoWindowF
                        position={{
                          lat: complaints.find(c => c.id === selectedComplaint)!.lat,
                          lng: complaints.find(c => c.id === selectedComplaint)!.lng,
                        }}
                        onCloseClick={() => setSelectedComplaint(null)}
                      >
                        <div className="p-2">
                          <h4 className="font-semibold text-sm">
                            {complaints.find(c => c.id === selectedComplaint)!.type}
                          </h4>
                          <p className="text-xs">{complaints.find(c => c.id === selectedComplaint)!.location}</p>
                          <p className="text-xs opacity-70">Status: {complaints.find(c => c.id === selectedComplaint)!.status}</p>
                          <p className="text-xs opacity-70">{complaints.find(c => c.id === selectedComplaint)!.time}</p>
                        </div>
                      </InfoWindowF>
                    )}
                  </GoogleMap>
                ) : (
                  <div className="h-80 w-full animate-pulse bg-muted/40 flex justify-center items-center">
                    Loading map...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <div className="bg-gradient-card border border-border/50 rounded-3xl p-6 shadow-medium">
              <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>

              <div className="space-y-4">
                {complaints.map((complaint) => {
                  const StatusIcon = getStatusIcon(complaint.status);
                  return (
                    <div key={complaint.id} className="flex items-start space-x-3 p-3 bg-background/50 rounded-xl hover:bg-background/80 transition-colors">
                      <div className={`p-2 rounded-lg ${getStatusColor(complaint.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm">{complaint.type}</p>
                        <p className="text-xs text-muted-foreground">{complaint.location}</p>
                        <p className="text-xs text-muted-foreground">{complaint.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintMapSection;
