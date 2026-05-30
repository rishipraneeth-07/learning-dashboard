import { createClient } from '@supabase/supabase-js'

export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false,
    },
  }
)