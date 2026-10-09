"use client"

import { useEffect, useState } from "react"

export default function MemorialPreview() {
    const [memorial, setMemorial] = useState(null)

    useEffect(() => {
        const savedMemorial = localStorage.getItem("petsiveMemorial")

        if (savedMemorial) {
            setMemorial(JSON.parse(savedMemorial))
        }
    }, [])

    function handlePublish() {
        const savedMemorial = localStorage.getItem("petsiveMemorial")

        if (!savedMemorial) {
            alert("Please create a memorial first.")
            window.location.href = "/create"
            return
        }

        const memorialData = JSON.parse(savedMemorial)

        if (!memorialData.slug) {
            alert("Memorial link is missing. Please create the memorial again.")
            return
        }

        window.location.href = `/memorial/${memorialData.slug}`
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

                    <a
                        href="/explore"
                        className="text-sm text-stone-600 hover:text-stone-950"
                    >
                        Explore
                    </a>
                </div>
            </header>

            {/* Preview notice */}
            <div className="border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <div>
                        <p className="text-sm font-medium">
                            Memorial preview
                        </p>

                        <p className="mt-1 text-xs text-stone-500">
                            This is how your memorial will appear to visitors.
                        </p>
                    </div>

                    <button onClick={handlePublish} className="rounded-full bg-stone-900 px-5 py-2.5 text-xs font-medium text-white">
                        Publish memorial
                    </button>
                </div>
            </div>

            {/* Memorial */}
            <section className="mx-auto max-w-5xl px-4 pb-20 pt-6 sm:px-6">

                {/* Cover */}
                <div className="relative overflow-visible">

                    <div className="relative h-72 overflow-hidden rounded-3xl bg-stone-200 sm:h-96">
                        <img
                            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1800&q=85"
                            alt="Memorial cover"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Profile photo */}
                    <div className="absolute left-1/2 top-56 -translate-x-1/2 sm:left-10 sm:top-80 sm:translate-x-0">
                        <div className="rounded-full border-[7px] border-stone-50 bg-stone-50 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=85"
                                alt={memorial?.petName || "Your pet"}
                                className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
                            />
                        </div>
                    </div>

                </div>

                {/* Identity */}
                <div className="px-3 pt-28 text-center sm:px-10 sm:pt-32 sm:text-left">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        Memorial
                    </p>

                    <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                        {memorial?.petName || "Your pet"}
                    </h1>

                    <p className="mt-3 text-sm text-stone-500">
                        {memorial?.birthDate || "Date of birth"} —{" "}
                        {memorial?.passingDate || "Date of passing"}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                        <button onClick={handlePublish} className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white">
                            Publish memorial
                        </button>

                        <button className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium">
                            Edit memorial
                        </button>
                    </div>

                </div>

                {/* Story */}
                <section className="mt-16 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        {`${memorial?.petName || "Your pet"}'s story`}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        A little life that meant everything.
                    </h2>

                    <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-stone-600">
                        <p>
                            {memorial?.story ||
                                "Your pet's story will appear here once you add it."}
                        </p>
                    </div>

                </section>

                {/* Media */}
                <section className="mt-12">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                            Memories
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            Moments with {memorial?.petName || "your pet"}
                        </h2>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-3xl sm:grid-cols-3">

                        <img
                            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
                            alt={memorial?.petName || "Your pet"}
                            className="aspect-square w-full object-cover"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
                            alt={memorial?.petName || "Your pet"}
                            className="aspect-square w-full object-cover"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80"
                            alt={memorial?.petName || "Your pet"}
                            className="aspect-square w-full object-cover"
                        />

                    </div>

                </section>

                {/* Memory Wall */}
                <section className="mt-12 rounded-3xl bg-stone-900 p-8 text-white sm:p-10">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        Memory Wall
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Give people a place to remember {memorial?.petName || "your pet"}.
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-300">
                        Friends, family, and visitors will be able to leave memories,
                        thoughts, and flowers here.
                    </p>

                    <div className="mt-7">
                        <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900">
                            View Memory Wall
                        </button>
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
