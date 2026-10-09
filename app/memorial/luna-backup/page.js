
const photos = [
    {
        src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
        alt: "Luna sitting outside",
    },
    {
        src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
        alt: "Luna looking at the camera",
    },
    {
        src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
        alt: "Luna resting",
    },
    {
        src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80",
        alt: "Luna outdoors",
    },
]

export default function LunaMemorial() {
    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">

            {/* Header */}
            <header className="border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <a href="/" className="text-2xl font-semibold tracking-tight">
                        Petsive
                    </a>

                    <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
                        <a href="/explore" className="hover:text-stone-950">
                            Explore
                        </a>
                        <a href="/#plans" className="hover:text-stone-950">
                            Plans
                        </a>
                        <a href="#" className="hover:text-stone-950">
                            Sign in
                        </a>
                        <a
                            href="#"
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

                    {/* Cover image */}
                    <div className="relative h-72 overflow-hidden rounded-3xl bg-stone-200 sm:h-96">
                        <img
                            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1800&q=85"
                            alt="Luna's favorite outdoor place"
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
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        {memorial?.petName || "Your pet"}
                    </h1>

                    <p className="mt-3 text-sm text-stone-500">
                        April 12, 2012 — September 18, 2026
                    </p>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:mx-0">
                        Forever loved, deeply missed, and always part of the family.
                    </p>

                    {/* Actions */}
                    <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
                        <a
                            href="/memorial/luna/memories"
                            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
                        >
                            Memory Wall
                        </a>

                        <button className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 hover:bg-stone-100">
                            Send Flowers
                        </button>
                    </div>
                </div>

                {/* Story */}
                <section className="mt-16 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        {memorial?.petName || "Your pet"}'s story
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        A little life that meant everything.
                    </h2>

                    <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-stone-600">
                        <p>
                            Luna came into our lives on a quiet spring day and somehow made
                            every ordinary day feel special.
                        </p>

                        <p>
                            She loved long walks, sleeping in the warmest spot in the house,
                            and being wherever her family was. She had a way of making
                            everyone around her smile without asking for anything in return.
                        </p>

                        <p>
                            Sixteen years was not nearly enough, but every year with Luna
                            became part of our family story. Her favorite places, little
                            habits, and the memories she gave us will stay with us forever.
                        </p>

                        <p>
                            This memorial is a place for us to keep those memories close and
                            for everyone who loved Luna to remember her in their own way.
                        </p>
                    </div>
                </section>

                {/* Media */}
                <section className="mt-12">
                    <div className="flex items-end justify-between px-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                                Memories
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold">
                                Moments with {memorial?.petName || "your pet"}
                            </h2>
                        </div>

                        <span className="hidden text-sm text-stone-400 sm:block">
                            Photos · Videos · Audio
                        </span>
                    </div>

                    {/* Instagram-style media grid */}
                    <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-3xl sm:grid-cols-3">
                        {photos.map((photo) => (
                            <div
                                key={photo.src}
                                className="aspect-square overflow-hidden bg-stone-200"
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Placeholder media types */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
                            <p className="text-sm font-medium">▶ Video memories</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Videos shared by Luna's family will appear here.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
                            <p className="text-sm font-medium">♫ Audio memories</p>
                            <p className="mt-1 text-sm text-stone-500">
                                Voice notes and other audio memories will appear here.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Memory Wall introduction */}
                <section className="mt-12 rounded-3xl bg-stone-900 p-8 text-white sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                        Remember Luna
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Leave something behind for her family.
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-stone-300">
                        Share a memory, a few words, or send flowers to Luna's family.
                        Your remembrance becomes part of her Memory Wall.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href="/memorial/luna/memories"
                            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900"
                        >
                            Visit Memory Wall
                        </a>

                        <button className="rounded-full border border-stone-600 px-6 py-3 text-sm font-medium text-white">
                            Send Flowers
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
