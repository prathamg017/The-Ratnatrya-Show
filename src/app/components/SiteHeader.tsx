'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/journey', label: 'Journey' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/wisdom', label: 'Wisdom' },
  { href: '/sky-king-akash-jain', label: 'Founder' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const headerClass = [
    'site-header',
    isHome ? 'site-header--home' : 'site-header--inner',
    scrolled ? 'is-scrolled' : '',
    menuOpen ? 'is-menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="site-header-inner">
          <Link href="/" className="site-brand" aria-label="The Ratnatraya Show – Home">
            <span className="site-brand-mark" aria-hidden="true">
              <span className="site-brand-dot" />
            </span>
            <span className="site-brand-text">
              <span className="site-brand-name">Ratnatraya</span>
              <span className="site-brand-tag">Jinshasan · Bhakti · Nritya · Vani</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav-link${active ? ' is-active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header-actions">
            <Link href="/invite" className="site-cta" prefetch={true}>
              Join the Team
            </Link>
            <button
              type="button"
              className={`site-burger${menuOpen ? ' is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <span className="site-scroll-progress" style={{ width: `${progress}%` }} />
      </header>

      {/* Full-screen mobile menu */}
      <div className={`site-mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="site-mobile-links" aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-mobile-link${active ? ' is-active' : ''}`}
                style={{ ['--stagger' as string]: `${0.06 * i}s` }}
              >
                <span className="site-mobile-index">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="site-mobile-footer">
          <Link href="/invite" className="site-cta site-mobile-cta" prefetch={true}>
            Join the Team
          </Link>
          <a
            href="https://www.instagram.com/the_ratnatray_show/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-mobile-social"
          >
            @the_ratnatray_show
          </a>
        </div>
      </div>
    </>
  );
}
