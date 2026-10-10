
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Plans', href: '/plans' },
]

function isActive(pathname, href) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navigation() {
    const pathname = usePathname()

    return (
        <>
            {/* Tablet and desktop navigation */}
            <header className="petsive-desktop-nav">
                <div className="petsive-nav-inner">
                    <Link href="/" className="petsive-brand">
                        Petsive
                    </Link>

                    <nav aria-label="Main navigation" className="petsive-nav-links">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`petsive-nav-link ${isActive(pathname, link.href) ? 'is-active' : ''
                                    }`}
                                aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link href="/create" className="petsive-create-link">
                            Create memorial
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Mobile bottom navigation */}
            <nav aria-label="Mobile navigation" className="petsive-mobile-nav">
                <Link
                    href="/"
                    className={`petsive-mobile-link ${isActive(pathname, '/') ? 'is-active' : ''
                        }`}
                    aria-current={isActive(pathname, '/') ? 'page' : undefined}
                >
                    <span className="petsive-mobile-icon" aria-hidden="true">⌂</span>
                    <span>Home</span>
                </Link>

                <Link
                    href="/explore"
                    className={`petsive-mobile-link ${isActive(pathname, '/explore') ? 'is-active' : ''
                        }`}
                    aria-current={isActive(pathname, '/explore') ? 'page' : undefined}
                >
                    <span className="petsive-mobile-icon" aria-hidden="true">⌕</span>
                    <span>Explore</span>
                </Link>

                <Link
                    href="/create"
                    className={`petsive-mobile-link ${isActive(pathname, '/create') ? 'is-active' : ''
                        }`}
                    aria-current={isActive(pathname, '/create') ? 'page' : undefined}
                >
                    <span className="petsive-mobile-icon" aria-hidden="true">+</span>
                    <span>Create</span>
                </Link>
            </nav>
        </>
    )
}
