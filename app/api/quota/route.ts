import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server"; // Asegúrate de que este path sea correcto

export const runtime = "edge";

export async function POST(request: Request) {
  const { code } = await request.json();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.from("quotas").insert([{ quota: code, used: false }]);

  if (error) {
    console.error("Error insertando de cupo:", error.message);
    return NextResponse.json({ message: "comunicate con el staff" }, { status: 500 });
  }

  return NextResponse.json({ message: "Cupo insertado correctamente" });
}
