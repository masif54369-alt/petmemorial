
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

const photos = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
]


export default function DynamicMemorial() {
    const params = useParams()
    const [savedMemorial, setSavedMemorial] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const slug = decodeURIComponent(params?.petName || "").toLowerCase()

    const displayPetName = decodeURIComponent(params?.petName || "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase())

    useEffect(() => {
        try {
            const storedMemorials = JSON.parse(
                localStorage.getItem("petsiveMemorials") || "{}"
            )

            const oldData = localStorage.getItem("petsiveMemorial")

            // Preserve the existing memorial from the old storage system.
            if (oldData) {
                const oldMemorial = JSON.parse(oldData)

                const oldSlug =
                    oldMemorial.slug ||
                    oldMemorial.petName
                        ?.trim()
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")

                if (oldSlug && !storedMemorials[oldSlug]) {
                    storedMemorials[oldSlug] = oldMemorial

                    localStorage.setItem(
                        "petsiveMemorials",
                        JSON.stringify(storedMemorials)
                    )
                }
            }

            setSavedMemorial(storedMemorials[slug] || null)
        } catch {
            setSavedMemorial(null)
        }

        setIsLoaded(true)
    }, [slug])

    const savedSlug =
        savedMemorial?.slug ||
        savedMemorial?.petName
            ?.trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")

    const matchesSavedMemorial =
        Boolean(savedMemorial) && savedSlug === slug

    const memorial = matchesSavedMemorial ? savedMemorial : {}
    const petName = matchesSavedMemorial
        ? savedMemorial.petName
        : slug
            .split("-")
            .filter(Boolean)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ") || "Your pet"


    if (!isLoaded) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
                <p className="text-sm text-stone-500">
                    Loading memorial...
                </p>
            </main>
        )
    }
    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">

            {/* Header */}
            <header className="border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <a
                        href="/"
                        className="text-2xl font-semibold tracking-tight"
                    >
                        Petsive
                    </a>

                    <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
                        <a
                            href="/explore"
                            className="hover:text-stone-950"
                        >
                            Explore
                        </a>

                        <a
                            href="#"
                            className="hover:text-stone-950"
                        >
                            Sign in
                        </a>

                        <a
                            href="/create"
                            className="rounded-full bg-stone-900 px-5 py-2.5 text-white"
                        >
                            Create memorial
                        </a>
                    </nav>
                </div>
            </header>

            {/* Memorial */}
            <section className="mx-auto max-w-5xl px-4 pb-20 pt-6 sm:px-6">

                {/* Cover */}
                <div className="relative overflow-visible">

                    <div className="relative h-72 overflow-hidden rounded-3xl bg-stone-200 sm:h-96">
                        <img
                            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1800&q=85"
                            alt={`${petName}'s memorial cover`}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Profile photo */}
                    <div className="absolute left-1/2 top-56 -translate-x-1/2 sm:left-10 sm:top-80 sm:translate-x-0">
                        <div className="rounded-full border-[7px] border-stone-50 bg-stone-50 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=85"
                                alt={petName}
                                className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
                            />
                        </div>
                    </div>

                </div>

                {/* Identity */}
                <div className="px-3 pt-28 text-center sm:px-10 sm:pt-32 sm:text-left">

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        {displayPetName}
                    </h1>

                    <p className="mt-3 text-sm text-stone-500">
                        {memorial.birthDate || "Date of birth"} —{" "}
                        {memorial.passingDate || "Date of passing"}
                    </p>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:mx-0">
                        Forever loved, deeply missed, and always part of the family.
                    </p>

                    {/* Actions */}
                    <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
                        <a
                            href={`/memorial/${petName.toLowerCase()}/memories`}
                            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
                        >
                            Memory Wall
                        </a>

                        <button className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800">
                            Send Flowers
                        </button>
                    </div>

                </div>

                {/* Story */}
                <section className="mt-16 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        {displayPetName}'s story
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        A life worth remembering.
                    </h2>

                    <div className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
                        <p>
                            {memorial.story ||
                                `This is a place to remember ${petName}'s life, personality, and the memories shared with family and friends.`}
                        </p>
                    </div>

                </section>

                {/* Media */}
                <section className="mt-12">

                    <div className="px-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                            Memories
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            Moments with {displayPetName}
                        </h2>

                        <p className="mt-2 text-sm text-stone-500">
                            Photos, videos, and audio memories will appear here.
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-3xl sm:grid-cols-3">
                        {photos.map((photo) => (
                            <div
                                key={photo}
                                className="aspect-square overflow-hidden bg-stone-200"
                            >
                                <img
                                    src={photo}
                                    alt={`${petName} memory`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                </section>

                {/* Memory Wall */}
                <section className="mt-12 rounded-3xl bg-stone-900 p-8 text-white sm:p-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        Memory Wall
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Remember {displayPetName}.
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-300">
                        Friends, family, and visitors can leave memories, thoughts,
                        and flowers here.
                    </p>

                    <div className="mt-7">
                        <a
                            href={`/memorial/${petName.toLowerCase()}/memories`}
                            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900"
                        >
                            Visit Memory Wall
                        </a>
                    </div>

                </section>

            </section>

            {/* Footer */}
            <footer className="border-t border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>Petsive — memories that stay.</p>
                    <p>© 2026 Petsive</p>
                </div>
            </footer>

        </main>
    )
}
