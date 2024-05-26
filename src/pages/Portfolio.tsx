import { useState } from 'react';
import Headline from '../components/Headline';
import WorkCard from '../components/WorkCard';
import { categories, works } from '../utils/works';

const Portfolio = () => {
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [activeStack, setActiveState] = useState<string>(categories[0]);

  const onClickHandle = (category: string) => {
    setActiveState(category);
    if (category === categories[0]) {
      setFilteredWorks(works);
      return;
    }

    setFilteredWorks(
      works.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div>
      <Headline title='Портфолио' />
      <div className='mt-8 flex flex-col gap-5 text-grays'>
        <p>
          Я горжусь тем, что работаю над каждым проектом с одинаковой страстью и
          вниманием к деталям, стремясь доставить пользователю максимальное
          удобство и функциональность.
        </p>
      </div>
      <div className='mt-8'>
        <div className='flex gap-4 justify-end'>
          {categories.map((category) => (
            <div
              className={`cursor-pointer text-xl font-semibold ${
                activeStack === category && 'text-red-600'
              }`}
              onClick={() => onClickHandle(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {filteredWorks.map((work) => (
            <WorkCard {...work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
