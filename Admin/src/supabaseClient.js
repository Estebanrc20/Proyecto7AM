import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjcicgaubbtovahtdkvc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2ljZ2F1YmJ0b3ZhaHRka3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTIzMTcsImV4cCI6MjA2NTc2ODMxN30.RIOWNKiARi0j1RqDRG2wsBA1jucHETHUjhROiI1uqT0'
export const supabase = createClient(supabaseUrl, supabaseKey)

