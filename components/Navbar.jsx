import React, { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  // const [linkColor, setLinkColor] = useState('#1f2937');
  const handleNav = () => {
    setNav(!nav)
  };

  useEffect (()=>{
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }
      else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll',handleShadow)
  },[]);
 
  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleShadow);
  // }, []);
 
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href="/">
        <Image src="/assets/logo.png" alt="/" width='125' height='50' />
        </Link>
        
        <div>
          <ul className='hidden md:flex'>
            <Link scroll={false} href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link scroll={false} href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/assets/logo.png' alt='/' width='87' height='35' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p>Learning, Evolving!</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Connect with me</p>

            </div>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                <FaLinkedin />
              </div>
              <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                <AiOutlineMail />
              </div>
              {/* <div className='rounded-full shadow-md shadow-[#c0befe] p-3 cursor-pointer hover:scale-105 ease-in duration-150'>
                <FaLinkedin />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
