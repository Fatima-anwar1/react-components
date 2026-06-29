import { useState } from 'react';
import Cards from './cards'; 
import About from './about';     // About page ko connect kiya
import Contact from './contact'; // Contact page ko connect kiya

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* ================= 1. NAVBAR SECTION ================= */}
      <div className="navbar bg-slate-900 border-b border-slate-800 px-4 md:px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold text-white">
            DevBatch
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="form-control hidden sm:block">
            <input 
              type="text" 
              placeholder="Find Items" 
              className="input input-bordered input-sm bg-slate-800 text-white border-slate-700 w-36 md:w-auto" 
            />
          </div>

          <a href="#" className="text-sm font-semibold text-white hover:text-slate-300 mx-2">
            Log in <span className="ml-1">&rarr;</span>
          </a>

          <div className="relative">
            <button 
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-10 rounded-full ring-2 ring-blue-500">
                <img 
                  alt="Navbar Avatar" 
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                />
              </div>
            </button>
            
            {isOpen && (
              <ul className="menu menu-sm bg-slate-800 text-white rounded-box mt-2 w-52 p-2 shadow-2xl border border-slate-700 absolute right-0 z-[50]">
                <li>
                  <a className="justify-between" onClick={() => setIsOpen(false)}>
                    Profile
                    <span className="badge badge-secondary">New</span>
                  </a>
                </li>
                <li><a onClick={() => setIsOpen(false)}>MY Orders</a></li>
                <li><a onClick={() => setIsOpen(false)}>Logout</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ================= 2. HERO SECTION ================= */}
      <div className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm text-slate-400 ring-1 ring-slate-800 bg-slate-950">
              Our Next Development Batch is Live!{' '}
              <a href="#" className="font-semibold text-blue-400 pl-1">
                Read more &rarr;
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Master Web Development with <span className="text-blue-500">DevBatch</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-300">
            React.js, JavaScript, aur modern UI libraries seekhein bilkul scratch se. Apna professional portfolio banayein aur market mein in-demand developer banean.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="btn btn-primary text-white px-6">
              Get Started
            </button>
            <button className="btn btn-ghost text-white">
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ================= 3. CARDS SECTION ================= */}
      <div className="border-t border-slate-800 bg-slate-950/40">
        <Cards />
      </div>

      {/* ================= 4. ABOUT SECTION ================= */}
      <div className="border-t border-slate-800 bg-slate-900">
        <About />
      </div>

      {/* ================= 5. CONTACT SECTION ================= */}
      <div className="border-t border-slate-800 bg-slate-950/20">
        <Contact />
      </div>

      {/* ================= 6. FOOTER SECTION ================= */}
      <footer className="footer footer-center p-10 bg-slate-950 text-slate-400 border-t border-slate-800 mt-20">
        <aside>
          <p className="font-bold text-white text-lg tracking-wider">DevBatch</p> 
          <p className="text-sm mt-1">Providing quality tech education since 2026</p>
          <p className="text-xs text-slate-500 mt-4">Copyright © 2026 - All right reserved by DevBatch Ltd</p>
        </aside> 
        <nav className="grid grid-flow-col gap-4 text-sm mt-2">
          <a className="link link-hover hover:text-blue-400">About us</a>
          <a className="link link-hover hover:text-blue-400">Contact</a>
          <a className="link link-hover hover:text-blue-400">Jobs</a>
          <a className="link link-hover hover:text-blue-400">Press kit</a>
        </nav>
      </footer>

    </div>
  );
}
