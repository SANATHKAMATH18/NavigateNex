import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://huoxpcnxugdqstqfegkn.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1b3hwY254dWdkcXN0cWZlZ2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNDMxMTYsImV4cCI6MjAyODYxOTExNn0.3OLSbESMT6f7XwI2e2b0vPknBl4HQE4KseGSeGKOLDQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
