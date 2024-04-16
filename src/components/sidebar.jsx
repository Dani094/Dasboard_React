// import { useState } from 'react'
import './sidebar.css'
import PropTypes from 'prop-types';


const Sidebar = ({ showMenu }) => {
Sidebar.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};
  
  return (
   <div className={`bg-[#1F1D28] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <ul className='pl-4'>
        <li>
          <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
            Logo
          </h1>
        </li>
        <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
          <a 
          href="" 
          className='bg-[#ec7c6a] block rounded-xl text-center text-white'>
          <span className="material-icons text-2xl">
            home
          </span>
          </a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
          <a 
          href="" 
          className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
          <span className="material-icons text-2xl">
          watch_later
          </span>
          </a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
          <a 
          href="" 
          className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
          <span className="material-icons text-2xl">
          shopping_bag
          </span>
          </a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
          <a 
          href="" 
          className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
          <span className="material-icons text-2xl">
          mail
          </span>
          </a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
          <a 
          href="" 
          className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
          <span className="material-icons text-2xl">
          notifications
          </span>
          </a>
        </li>
        <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
          <a 
          href="" 
          className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
          <span className="material-icons text-2xl">
          settings
          </span>
          </a>
        </li>
      </ul>
      <div>
        <ul className='pl-4'>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl group rounded-bl-xl transition'>
              <a 
              href="" 
              className='group-hover:bg-[#ec7c6a] block rounded-xl text-center text-[#ec7c6a] group-hover:text-white transition'>
              <span className="material-icons text-2xl">
              logout
              </span>
              </a>
            </li>
        </ul>
      </div>
   </div>
  );
};

export default Sidebar
