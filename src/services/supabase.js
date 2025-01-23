
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://yintmaqlmxbaakipddab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbnRtYXFsbXhiYWFraXBkZGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNjgxMzksImV4cCI6MjA1MDk0NDEzOX0.5FtnA0SZRbP1-4JGxDBM1o8dXjfEEblcjY_39wYeaWE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;