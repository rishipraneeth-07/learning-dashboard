import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createSupabaseClient(supabaseUrl, supabaseKey)