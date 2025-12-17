import { createClient } from "@supabase/supabase-js";

// Log environment variables for debugging
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_SERVICE_ROLE_KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY);

// Load environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase URL or service role key");
}

// Create Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export async function handler(event) {
  console.log("Handler called, env vars are:", {
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY
  });

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, pin } = JSON.parse(event.body);
    console.log("Received login attempt:", { name, pin });

    if (!name || !pin) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing credentials" }) };
    }

    // Query the beta_users table securely
    const { data, error } = await supabase
      .from("beta_users")
      .select("user_id, name") // only return necessary fields
      .eq("name", name)
      .eq("pin_code", pin)
      .single();

    console.log("Supabase query result:", { data, error });

    if (error || !data) {
      return { statusCode: 401, body: JSON.stringify({ error: "Invalid login" }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ user: data }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  }
}
