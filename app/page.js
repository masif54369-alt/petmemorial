
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [memorials, setMemorials] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const storedMemorials = JSON.parse(
        localStorage.getItem("petsiveMemorials") || "{}"
      )

      const memorialList = Object.values(storedMemorials)
        .filter((memorial) => memorial && memorial.slug && memorial.petName)

      setMemorials(memorialList)
    } catch {
      setMemorials([])
    } finally {
      setIsLoaded(true)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-[#242321]">

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8176]">
            A place to remember them
          </p>

          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Every beloved life leaves a story.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#716b63] sm:text-lg sm:leading-8">
            A quiet place to honor the pets we love, preserve
            their stories, and keep their memories close.
          </p>

          <Link
            href="/create"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#292722] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#454139]"
          >
            Create a memorial
          </Link>
        </div>
      </section>

      {/* Memorial feed */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="border-t border-[#e5dfd5] pt-8 sm:pt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a8176]">
                Remembered with love
              </p>

              <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">
                Memorials
              </h2>
            </div>

            <span className="pb-1 text-sm text-[#8a8176]">
              {isLoaded ? memorials.length : "…"}
            </span>
          </div>

          {!isLoaded ? (
            <div className="py-20 text-center text-sm text-[#716b63]">
              Opening our memorial garden…
            </div>
          ) : memorials.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-[#e5dfd5] bg-white/60 px-6 py-14 text-center sm:mt-10 sm:py-20">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eee8de] font-serif text-2xl text-[#716b63]"
                aria-hidden="true"
              >
                ♡
              </div>

              <h3 className="mt-6 font-serif text-2xl font-medium sm:text-3xl">
                Every memorial begins with a story.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#716b63] sm:text-base">
                This garden is waiting for its first tribute.
                Create a memorial to give a beloved pet's
                story a place to live on.
              </p>

              <Link
                href="/create"
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfc7bb] px-6 py-3 text-sm font-medium transition hover:bg-[#f1ece4]"
              >
                Create the first memorial
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {memorials.map((memorial) => (
                <Link
                  key={memorial.slug}
                  href={`/memorial/${encodeURIComponent(memorial.slug)}`}
                  className="group rounded-3xl border border-[#e5dfd5] bg-white/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eee8de] font-serif text-xl text-[#716b63]">
                    {memorial.petName.trim().charAt(0).toUpperCase()}
                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#8a8176]">
                    {memorial.petType || "Beloved pet"}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-medium group-hover:underline">
                    {memorial.petName}
                  </h3>

                  {(memorial.birthDate || memorial.passingDate) && (
                    <p className="mt-2 text-sm text-[#8a8176]">
                      {memorial.birthDate || " "}
                      {memorial.birthDate && memorial.passingDate ? " — " : ""}
                      {memorial.passingDate || ""}
                    </p>
                  )}

                  {memorial.story && (
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#716b63]">
                      {memorial.story}
                    </p>
                  )}

                  <p className="mt-6 text-sm font-medium text-[#454139]">
                    Visit memorial →
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5dfd5]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[#8a8176] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link href="/" className="font-serif text-xl font-semibold text-[#454139]">
            Petsive
          </Link>

          <p>A place to remember them.</p>
        </div>
      </footer>

    </main>
  )
}
