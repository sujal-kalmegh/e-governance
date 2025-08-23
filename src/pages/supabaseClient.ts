// supabaseClient.ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://kkeakeljshquqzkdyoyf.supabase.co";
const supabaseKey: string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZWFrZWxqc2hxdXF6a2R5b3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODQzNjgsImV4cCI6MjA3MTQ2MDM2OH0.EhQGVNHZprKf9tGP5x6LUd3eHHu0BIKpE9NXPeHnAfM";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
