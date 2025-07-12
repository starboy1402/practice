// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rbcjwbluvmjbkxgatzgw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiY2p3Ymx1dm1qYmt4Z2F0emd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNTA3NTcsImV4cCI6MjA2NzgyNjc1N30.uc5vgyJP-kgR4OxD9AOaenA3fq0fg12dngQ5zoYQoLk';
export const supabase = createClient(supabaseUrl, supabaseKey);

