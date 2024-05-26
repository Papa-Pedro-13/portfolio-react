import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { pages } from '../router/Routes';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('');
  const loc = useLocation();

  const onChangeHandle = () => {
    setDarkMode(!darkMode);
    if (darkMode === true) {
      document.querySelector('html')?.classList.remove('dark');
    } else {
      document.querySelector('html')?.classList.add('dark');
    }
  };

  useEffect(() => {
    setActivePage(loc.pathname);
  }, [loc]);

  return (
    <div className='py-10 px-2 min-h-[100lvh] pb-44 dark:bg-[#1e1e1e] bg-white'>
      <div className='max-w-[1200px] mx-auto w-full mb-4 px-4 md:px-14 flex justify-end items-center gap-4'>
        <div className='font-semibold text-lg dark:text-white text-zinc-900 transition'>
          Темная тема
        </div>
        <label className='switch '>
          <input
            type='checkbox'
            checked={darkMode}
            onChange={onChangeHandle}
          />
          <span className='slider round'></span>
        </label>
      </div>
      <div className='max-w-[1200px] py-10 px-4 md:px-14 m-auto w-full bg-slate-300 transition  dark:bg-black rounded-3xl overflow-hidden	'>
        <Outlet />
        <div className='fixed bottom-6 flex gap-4 md:flex-wrap  justify-center left-[50%] translate-x-[-50%] p-4 md:p-8 rounded-2xl bg-zinc-300 transition dark:bg-black  drop-shadow-lg border-zinc-600 border-[1px]'>
          {pages.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex-col flex w-14 h-14 md:w-20 md:h-20 rounded-md justify-center items-center gap-2 transition-all
              ${
                activePage === link.path
                  ? 'bg-mainGradient text-white hover:text-white'
                  : 'dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white text-zinc-200 hover:text-white hover:shadow-lg hover:scale-105 bg-slate-600 '
              }
              `}
            >
              {link?.icon}
              <div className='text-xs md:text-sm '>{link.name}</div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Toaster position='top-center' />
      </div>
    </div>
  );
};

export default Layout;
