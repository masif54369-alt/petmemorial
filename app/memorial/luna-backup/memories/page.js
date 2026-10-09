
const activities = [
    {
        type: "flowers",
        name: "Sarah",
        text: "sent $5 flowers to Luna's family",
        time: "2 hours ago",
    },
    {
        type: "memory",
        name: "Ahmed",
        text: "left a memory",
        message:
            "Luna was such a beautiful dog. I still remember how excited she would get when she saw us.",
        time: "5 hours ago",
    },
    {
        type: "flowers",
        name: "Maria",
        text: "sent $20 flowers to Luna's family",
        time: "Yesterday",
    },
    {
        type: "memory",
        name: "James",
        text: "left a memory",
        message:
            "She brought so much happiness to everyone around her. She will never be forgotten.",
        time: "Yesterday",
    },
]

function FlowerIcon() {
    return (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-lg">
            🌷
        </div>
    )
}

function MemoryIcon() {
    return (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-lg">
            💭
        </div>
    )
}

export default function LunaMemories() {
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

                        <a
                            href="/memorial/luna"
                            className="hover:text-stone-950"
                        >
                            Luna's Memorial
                        </a>

                        <a href="#" className="hover:text-stone-950">
                            Sign in
                        </a>
                    </nav>
                </div>
            </header>

            {/* Page */}
            <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">

                {/* Intro */}
                <div className="text-center">
                    <a
                        href="/memorial/luna"
                        className="text-sm text-stone-500 hover:text-stone-900"
                    >
                        ← Back to Luna's memorial
                    </a>

                    <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Luna's Memory Wall
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-500">
                        A place where family and friends can leave memories, kind words,
                        and flowers for Luna.
                    </p>
                </div>

                {/* Leave a memory */}
                <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8">
                    <h2 className="text-xl font-semibold">
                        Leave a memory
                    </h2>

                    <p className="mt-2 text-sm text-stone-500">
                        Share a favorite moment or a few words for Luna's family.
                    </p>

                    <textarea
                        placeholder="Write something to remember Luna by..."
                        className="mt-5 min-h-32 w-full resize-none rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm outline-none placeholder:text-stone-400 focus:border-stone-400"
                    />

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-stone-400">
                            You can leave a memory without creating an account.
                        </p>

                        <button className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800">
                            Leave memory
                        </button>
                    </div>
                </section>

                {/* Flowers */}
                <section className="mt-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Send flowers
                            </h2>

                            <p className="mt-2 max-w-lg text-sm leading-6 text-stone-500">
                                Send flowers to Luna's family as a simple way to show that
                                you're thinking of them.
                            </p>
                        </div>

                        <button className="shrink-0 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium hover:bg-stone-100">
                            Send flowers
                        </button>
                    </div>
                </section>

                {/* Activity */}
                <section className="mt-12">
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                            Remembrances
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            Recent activity
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <article
                                key={index}
                                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200 sm:p-6"
                            >
                                <div className="flex gap-4">
                                    {activity.type === "flowers" ? (
                                        <FlowerIcon />
                                    ) : (
                                        <MemoryIcon />
                                    )}

                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm leading-6 text-stone-700">
                                            <span className="font-semibold text-stone-950">
                                                {activity.name}
                                            </span>{" "}
                                            {activity.text}
                                        </p>

                                        <p className="mt-1 text-xs text-stone-400">
                                            {activity.time}
                                        </p>

                                        {activity.message && (
                                            <div className="mt-4 rounded-2xl bg-stone-50 p-4">
                                                <p className="text-sm leading-7 text-stone-600">
                                                    “{activity.message}”
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Bottom reminder */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-stone-400">
                        Luna is remembered here, one memory at a time.
                    </p>

                    <a
                        href="/memorial/luna"
                        className="mt-4 inline-block text-sm font-medium text-stone-700 underline underline-offset-4"
                    >
                        Return to Luna's memorial
                    </a>
                </div>

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
