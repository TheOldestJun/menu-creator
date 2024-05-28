import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify(body));
}
