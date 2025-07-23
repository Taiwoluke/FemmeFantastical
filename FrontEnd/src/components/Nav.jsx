import React from 'react' 
import Logo from '../assets/ff_light.png'
import {Link} from 'react-router-dom';

const Nav = () => {

  return (
    <nav className='bg-black flex flex-row'>
        <img src={Logo} alt="logo" width={'20%'} height={'20%'} />

        <ul className='flex flex-row justify-center gap-8 m-auto text-white nav-text'>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">FemmeFantastica</a></li>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">DailyTips</a></li>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">WomanToWoman</a></li>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">FemmePosia</a></li>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">MenstrualNote</a></li>
            <li className='hover:text-pink-200 transition-colors ease-linear'><a href="">Editions</a></li>
        </ul>
    </nav>
  )
}

export default Nav