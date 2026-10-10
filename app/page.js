'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#242321]">

      {/* Mobile community feed header */}


      {/* Compact mobile sticky header */}
      <section className="sticky top-0 z-40 bg-[#FBF8F3] px-5 py-3 md:hidden">
        <a
          href="/"
          className="font-serif text-3xl font-semibold tracking-tight text-[#242321]"
        >
          Petsive
        </a>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#77736d]">
              A place to remember them
            </p>

            <h1 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Keep their memory close, forever.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#66625c]">
              Create a beautiful memorial for a pet you love, share their
              story, keep their memories together, and give others a place
              to remember them.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="/create"
                className="rounded-full bg-[#242321] px-7 py-3.5 text-sm text-white"
              >
                Create a memorial
              </a>

              <button className="rounded-full border border-[#bdb8af] px-7 py-3.5 text-sm">
                Explore memorials
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=85"
              alt="Pet"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-[#ded9d0] bg-[#eeebe5]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#77736d]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              A simple place for their story to live on.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <span className="text-sm text-[#8a857d]">01</span>

              <h3 className="mt-8 text-2xl font-medium">
                Create their memorial
              </h3>

              <p className="mt-4 leading-7 text-[#66625c]">
                Add their name, dates, story, photos, videos, and the memories
                that made them special.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <span className="text-sm text-[#8a857d]">02</span>

              <h3 className="mt-8 text-2xl font-medium">
                Share their profile
              </h3>

              <p className="mt-4 leading-7 text-[#66625c]">
                Give family and friends a simple link where they can visit,
                remember, and share their thoughts.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <span className="text-sm text-[#8a857d]">03</span>

              <h3 className="mt-8 text-2xl font-medium">
                Keep remembering
              </h3>

              <p className="mt-4 leading-7 text-[#66625c]">
                Their memorial can continue to grow with stories, photographs,
                messages, and flowers from the people who remember them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore preview */}
      <section id="explore" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#77736d]">
              Explore
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Discover stories worth remembering.
            </h2>
          </div>

          <button className="w-fit rounded-full border border-[#bdb8af] px-6 py-3 text-sm">
            Explore all
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
              alt="Memorial pet"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80"
              alt="Memorial pet"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1570824104453-508955ab713e?w=800&q=80"
              alt="Memorial pet"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800&q=80"
              alt="Memorial pet"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section
        id="plans"
        className="border-y border-[#ded9d0] bg-[#eeebe5]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#77736d]">
              Memorial plans
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
              Choose how you want to remember them.
            </h2>

            <p className="mt-5 leading-7 text-[#66625c]">
              Placeholder plans for now. Pricing and exact features will be
              decided later.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <p className="text-sm text-[#77736d]">Basic</p>
              <h3 className="mt-3 text-3xl font-medium">Free</h3>

              <p className="mt-5 leading-7 text-[#66625c]">
                A simple starting place for creating a memorial.
              </p>

              <button className="mt-8 w-full rounded-full border border-[#bdb8af] px-5 py-3 text-sm">
                Get started
              </button>
            </div>

            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <p className="text-sm text-[#77736d]">Standard</p>
              <h3 className="mt-3 text-3xl font-medium">Coming soon</h3>

              <p className="mt-5 leading-7 text-[#66625c]">
                More features for creating and maintaining their memorial.
              </p>

              <button className="mt-8 w-full rounded-full bg-[#242321] px-5 py-3 text-sm text-white">
                Learn more
              </button>
            </div>

            <div className="rounded-3xl bg-[#f7f4ef] p-8">
              <p className="text-sm text-[#77736d]">Pro</p>
              <h3 className="mt-3 text-3xl font-medium">Lifetime</h3>

              <p className="mt-5 leading-7 text-[#66625c]">
                A lifetime memorial with features we will define later.
              </p>

              <button className="mt-8 w-full rounded-full border border-[#bdb8af] px-5 py-3 text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
          Give their memory a place to live on.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#66625c]">
          Create a Petsive memorial and share their story with the people who
          will always remember them.
        </p>

        <button className="mt-8 rounded-full bg-[#242321] px-7 py-3.5 text-sm text-white">
          Create a memorial
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ded9d0]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-[#77736d] md:flex-row">
          <span>Petsive</span>
          <span>A place to remember them.</span>
        </div>
      </footer>
    </main>
  )
}