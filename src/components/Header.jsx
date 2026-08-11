import { useState } from 'react';
import { Icon } from '@iconify/react';
import avatarImg from '../assets/yuzika.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 p-4 md:p-6">
      {/* Top Navigation (Desktop & Brand Logo) */}
      <nav className="flex justify-between items-center lg:max-w-7xl mx-auto">
        <div className="w-full lg:w-fit flex justify-between items-center bg-[#090d16]/80 backdrop-blur-md px-4 lg:px-6 py-3 rounded-xl border border-[#1793d1]/30 shadow-[0_0_15px_rgba(23,147,209,0.15)]">

          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 font-mono text-sm font-semibold text-white group">
            {/* <span className="text-[#00d8ff] group-hover:animate-pulse">&gt;_</span> */}
            <img src={avatarImg.src || avatarImg} alt="Logo" width={50} height={30} className='lg:w-15' />
            {/* <span>yuzikakal<span className="text-[#00d8ff]">.dev</span></span> */}
          </a>

          {/* Desktop Navigation Menu */}
          {/* <ul className="hidden md:flex gap-6 font-mono text-xs text-gray-300">
          <li><a href="/" className="hover:text-[#00d8ff] transition-colors">// home</a></li>
          <li><a href="#projects" className="hover:text-[#00d8ff] transition-colors">// proyek</a></li>
          <li><a href="#about" className="hover:text-[#00d8ff] transition-colors">// tentang</a></li>
        </ul> */}

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            className="flex md:hidden text-[#00d8ff] rounded-md hover:bg-[#1793d1]/20 transition-colors focus:outline-none"
          ><Icon icon="lucide:text-align-justify" className="w-6 h-6" />
          </button>
        </div>

            {/* Desktop nav */}
        <div className="hidden lg:flex w-fit h-full justify-between items-center bg-[#090d16]/80 backdrop-blur-md px-6 py-3 rounded-xl border border-[#1793d1]/30 shadow-[0_0_15px_rgba(23,147,209,0.15)]">
          <ul className="hidden md:flex gap-20 font-mono text-base text-[#00d8ff] group">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Floating Navigation */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-300 transform ${isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
      >
        <nav className="flex items-center gap-6 bg-[#090d16]/90 backdrop-blur-lg px-6 py-3 rounded-full border border-[#1793d1]/50 shadow-[0_0_20px_rgba(23,147,209,0.35)]">

          {/* Home Button */}
          <a href="/" onClick={closeMenu} className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#00d8ff] transition-colors">
            <Icon icon="lucide:home" className="w-5 h-5" />
            <span className="text-[10px] font-mono">Home</span>
          </a>

          <div className="w-[1px] h-6 bg-white/10" />

          {/* Project Button */}
          <a href="#projects" onClick={closeMenu} className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#00d8ff] transition-colors">
            <Icon icon="lucide:folder-git-2" className="w-5 h-5" />
            <span className="text-[10px] font-mono">Projects</span>
          </a>

          <div className="w-[1px] h-6 bg-white/10" />

          {/* About Button */}
          <a href="#about" onClick={closeMenu} className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#00d8ff] transition-colors">
            <Icon icon="lucide:user" className="w-5 h-5" />
            <span className="text-[10px] font-mono">About</span>
          </a>

        </nav>
      </div>
    </header>
  );
}