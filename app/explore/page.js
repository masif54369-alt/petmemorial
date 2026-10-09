const memorials = [
    {
        name: 'Luna',
        dates: '2012 — 2026',
        image:
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=85',
        description: 'A gentle soul who made every ordinary day feel special.',
    },
    {
        name: 'Milo',
        dates: '2010 — 2025',
        image:
            'https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=80',
        description: 'Remembered for his endless energy and loyal heart.',
    },
    {
        name: 'Bella',
        dates: '2013 — 2026',
        image:
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80',
        description: 'A loving companion who was part of every family moment.',
    },
    {
        name: 'Oliver',
        dates: '2011 — 2025',
        image:
            'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=900&q=80',
        description: 'Quiet, curious, and deeply loved.',
    },
    {
        name: 'Maple',
        dates: '2014 — 2026',
        image:
            'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=900&q=80',
        description: 'A bright presence remembered by everyone who knew her.',
    },
    {
        name: 'Theo',
        dates: '2012 — 2025',
        image:
            'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=900&q=80',
        description: 'A cherished friend whose memory continues to live on.',
    },
]

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-[#f7f4ef] text-[#242321]">
            {/* Header */}
            <header className="border-b border-[#ded9d0]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <a href="/" className="text-2xl font-semibold tracking-tight">
                        Petsive
                    </a>

                    <nav className="flex items-center gap-6 text-sm">
                        <a href="/explore" className="font-medium">
                            Explore
                        </a>

                        <button>Sign in</button>

                        <button className="rounded-full bg-[#242321] px-5 py-2.5 text-white">
                            Create memorial
                        </button>
                    </nav>
                </div>
            </header>

            {/* Intro */}
            <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
                <p className="text-sm uppercase tracking-[0.25em] text-[#77736d]">
                    Explore Petsive
                </p>

                <h1 className="mt-4 max-w-3xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
                    Discover stories worth remembering.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#66625c]">
                    Explore public memorials and discover the lives, stories, and
                    memories people have chosen to share.
                </p>
            </section>

            {/* Recently Remembered */}
            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#77736d]">
                            Recently remembered
                        </p>

                        <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                            Recent memorials
                        </h2>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {memorials.slice(0, 3).map((pet) => (
                        <a
                            href="/memorial/luna"
                            key={pet.name}
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-[1.5rem]">
                                <img
                                    src={pet.image}
                                    alt={pet.name}
                                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="pt-5">
                                <h3 className="text-2xl font-medium">{pet.name}</h3>

                                <p className="mt-1 text-sm text-[#77736d]">
                                    {pet.dates}
                                </p>

                                <p className="mt-3 leading-7 text-[#66625c]">
                                    {pet.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Recommended */}
            <section className="mt-16 border-y border-[#ded9d0] bg-[#eeebe5]">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#77736d]">
                        Recommended
                    </p>

                    <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                        More memorials to discover
                    </h2>

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                        {memorials.slice(3).map((pet) => (
                            <a
                                href="/memorial/luna"
                                key={pet.name}
                                className="group overflow-hidden rounded-[1.5rem]"
                            >
                                <div className="relative">
                                    <img
                                        src={pet.image}
                                        alt={pet.name}
                                        className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 bg-black/35 p-5 text-white">
                                        <h3 className="text-xl">{pet.name}</h3>

                                        <p className="mt-1 text-sm opacity-80">
                                            {pet.dates}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-3xl px-6 py-24 text-center">
                <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
                    Have someone you want to remember?
                </h2>

                <p className="mt-5 leading-7 text-[#66625c]">
                    Create a Petsive memorial and give their story a permanent place to
                    live.
                </p>

                <button className="mt-8 rounded-full bg-[#242321] px-7 py-3.5 text-sm text-white">
                    Create a memorial
                </button>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#ded9d0]">
                <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#77736d]">
                    Petsive
                </div>
            </footer>
        </main>
    )
}