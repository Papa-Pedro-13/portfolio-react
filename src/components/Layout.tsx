import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { pages } from '../router/Routes';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  const [activePage, setActivePage] = useState('');
  const loc = useLocation();

  useEffect(() => {
    setActivePage(loc.pathname);
  }, [loc]);

  return (
    <div className='py-10 px-2 min-h-[100lvh] pb-44'>
      <div className='max-w-[1200px] py-10 px-4 md:px-14 m-auto w-full  bg-black rounded-3xl overflow-hidden	'>
        <Outlet />
        <div className='fixed bottom-6 flex gap-4 md:flex-wrap  justify-center left-[50%] translate-x-[-50%] p-4 md:p-8 rounded-2xl bg-black  drop-shadow-lg border-zinc-600 border-[1px]'>
          {pages.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex-col flex w-14 h-14 md:w-20 md:h-20 rounded-md justify-center items-center gap-2 transition-all
              ${
                activePage === link.path
                  ? 'bg-mainGradient text-white hover:text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
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
