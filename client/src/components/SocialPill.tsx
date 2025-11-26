import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'

const ICONS = [
  { id: 'github', href: 'https://github.com/yourusername', node: <Github size={16} /> },
  { id: 'facebook', href: 'https://facebook.com/yourusername', node: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" fill="currentColor"/></svg> },
  { id: 'instagram', href: 'https://instagram.com/yourusername', node: <FaInstagram size={16} /> },
  { id: 'mail', href: 'mailto:faiza@example.com', node: <Mail size={16} /> },
  { id: 'resume', href: '/resume.pdf', node: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

export const SocialPill: React.FC = () => {
  return (
    <div className="mt-6">
      <motion.div
        className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-xl border border-slate-100"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {ICONS.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, rotate: -6 }}
            className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center text-slate-700 hover:text-emerald-600"
          >
            {item.node}
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default SocialPill
