
export async function generateMetadata({ params }) {
    const { petName } = await params

    const name = decodeURIComponent(petName)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase())

    return {
        title: `${name}'s Memorial | Petsive`,
        description: `Remember ${name} and celebrate their life on Petsive.`,
    }
}

export default function MemorialLayout({ children }) {
    return children
}