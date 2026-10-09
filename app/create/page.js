"use client"

import { useState } from "react"

export default function CreateMemorial() {
    const [form, setForm] = useState({
        petName: "",
        petType: "Dog",
        birthDate: "",
        passingDate: "",
        story: "",
    })

    function handleChange(event) {
        const { name, value } = event.target

        setForm((current) => ({
            ...current,
            [name]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const slug = form.petName
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")

        if (!slug) {
            alert("Please enter a pet name using English letters or numbers.")
            return
        }

        const savedMemorials = JSON.parse(
            localStorage.getItem("petsiveMemorials") || "{}"
        )

        const oldMemorial = localStorage.getItem("petsiveMemorial")

        if (oldMemorial) {
            const oldMemorialData = JSON.parse(oldMemorial)

            if (oldMemorialData.slug && !savedMemorials[oldMemorialData.slug]) {
                savedMemorials[oldMemorialData.slug] = oldMemorialData
            }
        }

        if (savedMemorials[slug]) {
            alert("A memorial with this name already exists. Please use a different name.")
            return
        }

        const memorialData = {
            ...form,
            slug,
        }

        savedMemorials[slug] = memorialData

        localStorage.setItem(
            "petsiveMemorials",
            JSON.stringify(savedMemorials)
        )

        localStorage.setItem(
            "petsiveCurrentMemorial",
            slug
        )

        window.location.href = "/preview"
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

            {/* Main */}
            <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">

                {/* Intro */}
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        Create a memorial
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Tell their story.
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-500">
                        Create a place where your pet's story, photographs, videos,
                        and memories can stay forever.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8"
                >

                    {/* Pet name */}
                    <div>
                        <label
                            htmlFor="petName"
                            className="text-sm font-medium"
                        >
                            Pet's name
                        </label>

                        <input
                            id="petName"
                            name="petName"
                            type="text"
                            value={form.petName}
                            onChange={handleChange}
                            placeholder="e.g. "
                            required
                            className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none placeholder:text-stone-400 focus:border-stone-400"
                        />
                    </div>

                    {/* Pet type */}
                    <div>
                        <label
                            htmlFor="petType"
                            className="text-sm font-medium"
                        >
                            Pet type
                        </label>

                        <select
                            id="petType"
                            name="petType"
                            value={form.petType}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-stone-400"
                        >
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option>
                            <option>Rabbit</option>
                            <option>Horse</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Dates */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                            <label
                                htmlFor="birthDate"
                                className="text-sm font-medium"
                            >
                                Date of birth
                            </label>

                            <input
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                value={form.birthDate}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-stone-400"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="passingDate"
                                className="text-sm font-medium"
                            >
                                Date of passing
                            </label>

                            <input
                                id="passingDate"
                                name="passingDate"
                                type="date"
                                value={form.passingDate}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-stone-400"
                            />
                        </div>

                    </div>

                    {/* Story */}
                    <div>
                        <label
                            htmlFor="story"
                            className="text-sm font-medium"
                        >
                            Their story
                        </label>

                        <textarea
                            id="story"
                            name="story"
                            value={form.story}
                            onChange={handleChange}
                            placeholder="Tell people about their life, personality, favorite things, and the memories you want to keep."
                            rows={7}
                            className="mt-2 w-full resize-none rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 outline-none placeholder:text-stone-400 focus:border-stone-400"
                        />
                    </div>

                    {/* Photos note */}
                    <div className="rounded-2xl bg-stone-50 p-5">
                        <p className="text-sm font-medium">
                            Photos & media
                        </p>

                        <p className="mt-1 text-sm leading-6 text-stone-500">
                            After creating the memorial, you'll be able to add their
                            profile photo, cover photo, photos, videos, and audio memories.
                        </p>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-stone-800"
                    >
                        Continue to memorial
                    </button>

                    <p className="text-center text-xs leading-5 text-stone-400">
                        You can edit your memorial and add more memories later.
                    </p>

                </form>

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
