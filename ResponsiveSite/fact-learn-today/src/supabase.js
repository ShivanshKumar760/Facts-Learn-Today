
import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://xocofdchlyuaugdwjgbh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvY29mZGNobHl1YXVnZHdqZ2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNjUwNDYsImV4cCI6MjAwNDg0MTA0Nn0.MZ1TMxAaWpyyvu-aiA26qSMZLQJZSbYOPEyprig0_Ys"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;