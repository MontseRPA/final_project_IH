const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqem54eGZkdXZ3aWhjamp3YnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNzg1MDQsImV4cCI6MjAyNzY1NDUwNH0.O8bnsmrzXp2VuMJ1L2aRzt_1cT1R0trQvJ5NEIGkWXg'

const PROJECT_URL = 'https://hjznxxfduvwihcjjwbzs.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)



// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://hjznxxfduvwihcjjwbzs.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)