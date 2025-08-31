import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./pages/supabaseClient";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookComplaint from "./pages/BookComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import AdminPortal from "./pages/AdminPortal"; // Uncomment if you have admin page

const queryClient = new QueryClient();

// ProtectedRoute: only accessible if logged in
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Checking authentication...</div>;

  return session ? children : <Navigate to="/login" />;
};

// PublicRoute: only accessible if NOT logged in
const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Checking authentication...</div>;

  return session ? <Navigate to="/" /> : children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/book-complaint" element={<ProtectedRoute><BookComplaint /></ProtectedRoute>} />
          <Route path="/track-complaint" element={<ProtectedRoute><TrackComplaint /></ProtectedRoute>} />

          {/* Optional Admin Portal */}
          {/* <Route path="/admin" element={<ProtectedRoute><AdminPortal /></ProtectedRoute>} /> */}

          {/* Fallback 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;