import { createClient } from "./server";

// Generic fetch by column (single)
export async function getByColumn(table, column, value) {
  const supabase = await createClient();
  const { data, error } = await supabase.from(table).select("*").eq(column, value).single();
  if (error) throw new Error(`${table} not found: ${error.message}`);
  return data;
}

// Generic fetch all
export async function getAll(table) {
  const supabase = await createClient();
  const { data, error } = await supabase.from(table).select("*").order("id", { ascending: true });
  if (error) throw new Error(`Error fetching ${table}: ${error.message}`);
  return data;
}

// Generic fetch related (by name prefix, fallback to random)
export async function getRelatedByName(table, id, name) {
  const supabase = await createClient();
  let { data, error } = await supabase
    .from(table)
    .select("*")
    .neq("id", id)
    .filter("name", "ilike", `${name.split(" ")[0]}%`);
  if (error) throw new Error(`Error fetching related: ${error.message}`);
  if (!data || data.length === 0) {
    const { data: randomData, error: randomError } = await supabase.from(table).select("*").neq("id", id).limit(4);
    if (randomError) throw new Error(`Error fetching fallback: ${randomError.message}`);
    return randomData;
  }
  return data;
}
