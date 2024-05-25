import Headline from '../components/Headline';
import { works } from '../utils/works';

const Portfolio = () => {
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
        <div className='flex gap-4'></div>
        <div className='grid grid-cols-2 lg:grid-cols-3'>
          {works.map((work) => (
            <div className=''>{work.image}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
