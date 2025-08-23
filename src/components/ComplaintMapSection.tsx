import React from 'react';
import { MapPin, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';

const complaints = [
  { id: 1, type: "Road Repair", status: "resolved", location: "Downtown", time: "2 days ago" },
  { id: 2, type: "Street Light", status: "in-progress", location: "Park Ave", time: "1 week ago" },
  { id: 3, type: "Noise Issue", status: "new", location: "Residential", time: "3 hours ago" },
  { id: 4, type: "Water Leak", status: "in-progress", location: "Main St", time: "5 days ago" },
  { id: 5, type: "Waste Collection", status: "resolved", location: "Oak District", time: "1 week ago" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'resolved': return 'text-success bg-success/10';
    case 'in-progress': return 'text-warning bg-warning/10';
    case 'new': return 'text-primary bg-primary/10';
    default: return 'text-muted-foreground bg-muted';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'resolved': return CheckCircle;
    case 'in-progress': return Clock;
    case 'new': return AlertCircle;
    default: return Clock;
  }
};

const ComplaintMapSection = () => {
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

              {/* Mock Map */}
              <div className="relative bg-gradient-to-br from-muted/50 to-background rounded-2xl h-80 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--success))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_40%_40%,hsl(var(--warning))_0%,transparent_50%)] opacity-20"></div>
                
                {/* Map pins */}
                <div className="absolute top-16 left-20 animate-bounce">
                  <div className="w-4 h-4 bg-success rounded-full border-2 border-background shadow-medium"></div>
                </div>
                <div className="absolute top-32 right-24 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="w-4 h-4 bg-warning rounded-full border-2 border-background shadow-medium"></div>
                </div>
                <div className="absolute bottom-20 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-medium"></div>
                </div>
                <div className="absolute bottom-24 right-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <div className="w-4 h-4 bg-warning rounded-full border-2 border-background shadow-medium"></div>
                </div>

                {/* Map overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-xs text-muted-foreground mt-1">See real complaints in your area</p>
                  </div>
                </div>
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

            {/* Quick Stats */}
            <div className="bg-gradient-card border border-border/50 rounded-3xl p-6 shadow-medium">
              <h3 className="text-lg font-semibold text-foreground mb-4">This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">New Complaints</span>
                  <span className="font-semibold text-primary">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Resolved</span>
                  <span className="font-semibold text-success">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">In Progress</span>
                  <span className="font-semibold text-warning">12</span>
                </div>
                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Avg. Response</span>
                    <span className="font-semibold text-foreground">18 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintMapSection;