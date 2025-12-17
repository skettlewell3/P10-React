import { getSupabaseAdmin } from '../../src/supbaseServer'

export async function handler(event) {
  const supabaseAdmin = getSupabaseAdmin() 

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  try {
    const { name, pin } = JSON.parse(event.body)
    if (!name || !pin) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing credentials" }) }
    }

    const { data, error } = await supabaseAdmin
      .from("beta_users")
      .select("user_id, name")
      .eq("name", name)
      .eq("pin_code", pin)
      .single()

    if (error || !data) {
      return { statusCode: 401, body: JSON.stringify({ error: "Invalid login" }) }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ user: data }),
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) }
  }
}
