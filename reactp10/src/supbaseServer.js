import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseURL || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase URL or service role key")
}

export const supabaseAdmin = createClient(supabaseURL, supabaseServiceRoleKey)
