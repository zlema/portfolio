import React, { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from '../constants';
import { logoZ, menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} fixed w-full flex items-center 
    py-5 top-0 z-30 transition-all duration-500 ${
      scrolled ? "backdrop-panel border-b border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.25)]" : "bg-transparent"
    }`}
    > 
      <div className='w-full flex justify-between items-center 
      max-w-7xl mx-auto'>
        <Link
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <span className="liquid-logo-shell">
            <img src={logoZ} alt='logoZ' className='w-9 h-9 object-contain liquid-logo'/>
          </span>
          <p className='text-white text-[18px] 
          font-bold cursor-pointer flex tracking-wide'>
            Zephania &nbsp;
            <span 
          className='hidden sm:block text-secondary'>| &nbsp; Lema
            </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer transition-colors`} 
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>

          )) }

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close:menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain cursor-pointer"
          onClick={() => setToggle(!toggle) }
          />
          <div className={`${!toggle ? 'hidden'
            :'flex'} p-6 backdrop-panel absolute top-20 
            right-0 mx-4 my-2 min-w-[170px] z-10 rounded-2xl border border-white/10`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium
                    cursor-pointer text-[16px]`} 
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);

                  }}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>

              )) }

            </ul>

          </div>
        </div>        
      </div>

    </nav>
  )
}
export default Navbar
