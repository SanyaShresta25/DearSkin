// supabase.js - Client initialization
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = 'https://modxgthmkcrancxswojb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZHhndGhta2NyYW5jeHN3b2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTExMTksImV4cCI6MjA2MTUyNzExOX0.mpU5Sv1fRzGngFAmF94mrcNzhV5B_wwbmnhwm1NjdgE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
