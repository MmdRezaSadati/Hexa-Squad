import React from 'react'
import {Link} from 'react-router-dom';

import DesktopMenu from './header-components/DesktopMenu';
import HeaderButtons from './header-components/HeaderButtons';
import Logo from '../../assets/image/Logo.svg';
import LogoWhite from '../../assets/image/Logo - white.svg';
import LogoIcon from '../../assets/image/Logo-icon.svg';
import MobileMenu from './header-components/MobileMenu';
const Header = () => {
  window.addEventListener('scroll',()=>{
    console.log('first')
<<<<<<< HEAD
    let header = document.getElementById('header')
    if(window.pageYOffset > 110){
      header.classList.remove("w-full",'absolute');
      header.classList.add('header');
=======
    let header = document.querySelector('.header')
    if(window.pageYOffset > 110){
      header.classList.add("lg:fixed","bg-lightPink","shadow-shadow-Services-box","w-11/12","mx-auto","overflow-hidden","lg:left-[5%]" , "lg:top-3");
      header.classList.remove("w-full");
>>>>>>> feature/news
      // header.classList.add("bg-lightPink");
      // header.classList.add("shadow-shadow-Services-box");
    }
    else{
<<<<<<< HEAD
      header.classList.add("w-full",'absolute');
      header.classList.remove('header');
    }
  })
  return (
    <header className='rounded-xl absolute flex h-[110px] w-full z-50' id='header'>
=======
      header.classList.remove("lg:fixed","bg-lightPink","shadow-shadow-Services-box","w-11/12","mx-auto","overflow-hidden","lg:left-[5%]" , "lg:top-3" );
      header.classList.add("w-full");
    }
  })
  return (
    <header className='rounded-xl absolute header flex h-[125px] w-full z-50 '>
>>>>>>> feature/news
        <ul className='w-full flex items-center px-[20px]  '>
            <li className="w-4/12 relative">
              <Link to='/' className='z-20 relative'><img src={Logo} alt="Hexa Squad Logo" className='md:logo md:block hidden dark:hidden ' /><img src={LogoIcon} alt="Hexa Squad Logo" className='logo md:hidden ' /><img src={LogoWhite} alt="Hexa Squad Logo" className='md:logo hidden dark:md:block' /></Link>
                <svg  viewBox="0 0 476 222" fill="none" xmlns="http://www.w3.org/2000/svg" className='logo-bg'>
                    <path d="M478.428 219.682L200.994 217.817C90.54 217.075 1.60087 126.932 2.34319 16.4778L2.45285 0.160375" stroke="#757575" strokeOpacity="0.1" strokeWidth="3"/>
                </svg>
            </li>
            <li className="lg:w-4/12 w-0 ">
              <DesktopMenu className={'hidden lg:flex'}/>
            </li>
            
            <input type="checkbox" name="openMenu" id="openMenu"  className="hidden" />
            <li className="lg:w-4/12 w-7/12 header-buttons ">
              <HeaderButtons/>
            </li>
            <li className="mobile-menu-holder">
              <MobileMenu/>
            </li>
        </ul>
    </header>
  )
}

export default Header