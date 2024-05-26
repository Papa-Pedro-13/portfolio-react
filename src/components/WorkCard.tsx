import React from 'react';
import { Link } from 'react-router-dom';

interface Work {
  title: string;
  subtitle: string;
  image: string;
  sourceCode: string;
  pageUrl?: string;
  stack: string[];
}

const WorkCard: React.FC<Work> = ({
  title,
  subtitle,
  image,
  sourceCode,
  pageUrl,
  stack,
}) => {
  return (
    <div className='border-[1px] border-solid border-zinc-200 dark:border-[#212425] p-5 rounded-lg transition bg-slate-100 dark:bg-[#0D0D0D] flex flex-col'>
      <img
        className='rounded-md dark:border-0 border-zinc-700 border-[1px] w-full h-60 md:h-48 object-cover object-top hover:scale-105 transition-all'
        src={image}
        alt=''
      />
      <div className='mt-4 flex gap-2 flex-wrap'>
        {stack.map((item) => (
          <div
            className='py-1 px-3 rounded-md bg-blue-900 text-sm text-white'
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='text-zinc-800 transition dark:text-white mt-4 text-xl'>
        {title}
      </div>
      <div className='text-zinc-600 transition dark:text-zinc-400 mt-1 mb-4'>
        {subtitle}
      </div>
      <Link
        to={sourceCode}
        className='w-full block p-3 mt-auto
        text-center border-red-600 border-2 rounded-3xl text-red-600 dark:text-white hover:bg-red-600  transition-all hover:text-white'
      >
        Репозиторий GitHub
      </Link>
      {pageUrl && (
        <Link
          to={pageUrl}
          className='w-full block p-3 mt-4
        text-center border-blue-600 border-2 rounded-3xl text-blue-600 dark:text-white  hover:bg-blue-600  transition-all hover:text-white'
        >
          Перейти на сайт
        </Link>
      )}
    </div>
  );
};

export default WorkCard;
