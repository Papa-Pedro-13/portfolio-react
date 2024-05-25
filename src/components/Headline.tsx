interface HeadlineProps {
  title: string;
}
const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <div className='flex gap-10 items-center '>
      <div className='text-4xl font-bold text-white text-nowrap uppercase'>
        {title}
      </div>
      <div className='h-1 w-full max-w-52 bg-mainGradient rounded-md '></div>
    </div>
  );
};

export default Headline;
