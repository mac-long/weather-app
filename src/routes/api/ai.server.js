import { error } from "@sveltejs/kit";

export async function GET({ url }) {
  const q = url.searchParams.get("q");

  if (isNaN(q)) {
    return error(400, "Invalid query");
  }
}
