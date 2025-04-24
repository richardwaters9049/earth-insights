// src/lib/api.ts

// Import the generated DataPoint type
import type { DataPoint } from "../src/types";

// Define the base URL of our backend
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

// Fetch all data points from /api/data
export async function fetchData(): Promise<DataPoint[]> {
  const res = await fetch(`${BASE_URL}/api/data`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  // Parse JSON into our typed interface
  const data: DataPoint[] = await res.json();
  return data;
}
