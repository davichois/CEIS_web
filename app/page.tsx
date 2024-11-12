"use client";

import Image from "next/image";
import { useState } from "react";

export const runtime = "edge";

export default function Home() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Llama a la función insertEmail mediante la llamada a la API
    const response = await fetch("/api/quota", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (response.ok) {
      setMessage("Cupo enviado con éxito!");
      setCode(""); // Limpia el campo de entrada
    } else {
      const error = await response.json();
      setMessage(`Error: comunicate con el staff`);
      console.log(setMessage(`Error: ${error.message}`));
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-bold text-2xl">
          CEIS.<strong className="text-xs">conf</strong>
        </p>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Obtén tu código único con el{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              staff
            </code>
            .
            <ul className="list-inside list-disc ml-6 mt-2 text-gray-500 text-xs">
              <li>SANTILLAN VASQUEZ, Victor Brackson</li>
              <li>RIVERA MORETO, Jhenrry</li>
              <li>GONZALES MORI, David Lincol</li>
              <li>EDQUEN BARBOZA, Wilmer Alexander</li>
              <li>ARCE TUESTA, Carlos Sebastian</li>
              <li>FERNANDEZ CARRASCO, Jeyner Jahir</li>
              <li>OBLITAS DIAZ, Helen</li>
              <li>PANDURO RENGIFO, Josue</li>
            </ul>
          </li>
          <li>Ingresa y envía el código otorgado</li>
        </ol>

        <form
          onSubmit={handleSubmit}
          className="flex gap-4 items-center flex-col w-full"
        >
          <input
            placeholder="NC3I524PAf"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center border-black text-background gap-2 text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          />
          <button className="rounded-full border border-solid border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Enviar →
          </button>
          <p className="text-sm text-center mt-4">{message}</p>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://upeu.edu.pe/terminos-y-condiciones-de-uso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Terminos y condiciones de uso
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://upeu.edu.pe/facultad-de-ingenieria/ceis2024/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir a pagina del CEIS →
        </a>
      </footer>
    </div>
  );
}
