import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },,
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-5
      }`}
    >
      <div className="max-w-9xl mx-auto px-[6rem] flex items-center justify-between">

        {/* Logo / Name */}
        <a href="#hero" className="font-display text-2xl tracking-widest text-gold-300 hover:text-gold-300 transition-colors">
          [SUJAL KUMAR]
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-wide text-gray-400 hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-300 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — Desktop */}
        <div className='hidden md:flex items-center gap-3'>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-body font-medium border border-gold-500/50 text-gold-300 rounded hover:bg-gold-500/10 hover:border-gold-300 transition-all duration-300">
          Resume ↗
        </a>
        <a
          href="mailto:kumarsujal@gmail.com"
          target='_blank'
          className='px-4 py-2 text-sm border border-gold-500/50 text-gold-300 rounded hover:bg-gold-300 transition-all'>
          Email me
          </a>
          </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gold-400 hover:text-gold-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden  backdrop-blur-md border-t border-gold-500/10 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-body text-base text-gray-300 hover:text-gold-400 transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 text-sm border border-gold-500/50 text-gold-400 rounded hover:bg-gold-500/10 transition-all"
                >
                  Resume ↗
                </a>

                <a
                  href="mailto:kumarsujal@gmail.com"
                  target='_blank'
                  className='inline-block mt-2 px-4 py-2 text-sm border border-gold-500/50 text-gold-400 rounded hover:bg-gold-400 transition-all'>
                  Email me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
