import Headline from '../components/Headline';
import resumeDoc from '../../public/Островский Александр Сергеевич.pdf';

const Resume = () => {
  return (
    <>
      <Headline title={'Резюме'} />
      <div className='mt-8 flex flex-col gap-5 dark:text-grays text-zinc-900 transition'>
        <p>
          Мой путь в мире программирования начался 4 года назад, и с тех пор я с
          увлечением погружаюсь все глубже и глубже в эту сферу.
        </p>
      </div>
      <a
        download={'Островский Александр.pdf'}
        className='mt-6 block bg-mainGradient px-10 py-4 w-fit hover:text-white hover:scale-105 transition rounded-xl text-white'
        href={resumeDoc}
      >
        Скачать резюме
      </a>
      <div className='flex gap-8 mt-14 flex-col md:flex-row'>
        <div className='flex gap-5 flex-col w-full'>
          <div className='flex gap-4 items-center text-zinc-700 transition dark:text-white text-3xl font-medium'>
            <svg
              width='38'
              height='23'
              viewBox='0 0 38 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M35.8594 5.77344L20.332 0.734375C19.2773 0.421875 18.2227 0.421875 17.168 0.734375L1.64062 5.77344C1.13281 5.92969 0.722656 6.22266 0.410156 6.65234C0.136719 7.04297 0 7.49219 0 8C0 8.50781 0.136719 8.97656 0.410156 9.40625C0.722656 9.79688 1.13281 10.0703 1.64062 10.2266L3.39844 10.8125C3.20312 11.1641 3.04688 11.5352 2.92969 11.9258C2.61719 12.082 2.36328 12.3164 2.16797 12.6289C1.97266 12.9414 1.875 13.2734 1.875 13.625C1.875 13.9766 1.97266 14.3086 2.16797 14.6211C2.36328 14.9336 2.61719 15.168 2.92969 15.3242L1.875 21.8867C1.83594 22.1602 1.875 22.4141 1.99219 22.6484C2.14844 22.8828 2.34375 23 2.57812 23H4.92188C5.15625 23 5.33203 22.8828 5.44922 22.6484C5.60547 22.4141 5.66406 22.1602 5.625 21.8867L4.57031 15.3242C4.88281 15.168 5.13672 14.9336 5.33203 14.6211C5.52734 14.3086 5.625 13.9766 5.625 13.625C5.625 13 5.37109 12.5117 4.86328 12.1602C4.94141 11.8867 5.05859 11.6328 5.21484 11.3984L8.37891 12.3945L7.5 19.25C7.5 19.9141 8.00781 20.5391 9.02344 21.125C10.0391 21.7109 11.4062 22.1797 13.125 22.5312C14.8438 22.8438 16.7188 23 18.75 23C20.7812 23 22.6562 22.8438 24.375 22.5312C26.0938 22.1797 27.4609 21.7109 28.4766 21.125C29.4922 20.5391 30 19.9141 30 19.25L29.1211 12.3945L35.8594 10.2266C36.3672 10.0703 36.7578 9.79688 37.0312 9.40625C37.3438 8.97656 37.5 8.50781 37.5 8C37.5 7.49219 37.3438 7.04297 37.0312 6.65234C36.7578 6.22266 36.3672 5.92969 35.8594 5.77344ZM28.0664 19.1328C27.6758 19.5625 26.7383 19.9727 25.2539 20.3633C23.3789 20.8711 21.2109 21.125 18.75 21.125C16.2891 21.125 14.1211 20.8711 12.2461 20.3633C10.7617 19.9727 9.82422 19.5625 9.43359 19.1328L10.1953 12.9805L17.168 15.2656C18.2227 15.6172 19.2773 15.6172 20.332 15.2656L27.3047 12.9805L28.0664 19.1328ZM35.2734 8.46875L19.7461 13.4492C19.082 13.6836 18.418 13.6836 17.7539 13.4492L7.44141 10.1094L18.9258 8C19.1602 7.96094 19.3555 7.84375 19.5117 7.64844C19.668 7.41406 19.7266 7.17969 19.6875 6.94531C19.6484 6.67187 19.5117 6.45703 19.2773 6.30078C19.043 6.14453 18.8086 6.08594 18.5742 6.125L6.62109 8.35156C5.95703 8.50781 5.3125 8.80078 4.6875 9.23047L2.22656 8.46875C1.99219 8.39062 1.875 8.23438 1.875 8C1.875 7.76562 1.99219 7.60937 2.22656 7.53125L17.7539 2.55078C18.418 2.31641 19.082 2.31641 19.7461 2.55078L35.2734 7.53125C35.5078 7.60937 35.625 7.76562 35.625 8C35.625 8.23438 35.5078 8.39062 35.2734 8.46875Z'
                fill='#F95054'
              />
            </svg>
            Образование
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='text-sm text-zinc-700 dark:text-zinc-500'>
              сен 2023 - янв 2024
            </div>
            <div className='text-lg text-zinc-900 transition dark:text-white leading-6 mt-2'>
              React-разработка
              <span className='text-zinc-700 dark:text-zinc-500 ml-1'>
                - HTML Academy
              </span>
            </div>
            <div className='text-zinc-700 dark:text-zinc-500  text-normal mt-1'>
              Онлайн курс
            </div>
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 transition'>
            <div className='text-sm text-zinc-700 dark:text-zinc-500'>
              2021-2025
            </div>
            <div className='text-lg text-zinc-900 transition dark:text-white leading-6 mt-2'>
              Информационная безопасность -
              <span className='text-zinc-700 dark:text-zinc-500 ml-1'>
                Санкт-петербургский политехнический университет
              </span>
            </div>
            <div className='text-zinc-700 dark:text-zinc-500  text-normal mt-1'>
              г. Санкт-петербург
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-col w-full'>
          <div className='flex gap-4 items-center text-zinc-700 transition dark:text-white text-3xl font-medium'>
            <svg
              width='30'
              height='27'
              viewBox='0 0 30 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.1875 6.25H20.625V2.03125C20.625 1.64062 20.4883 1.30859 20.2148 1.03516C19.9414 0.761719 19.6094 0.625 19.2188 0.625H10.7812C10.3906 0.625 10.0586 0.761719 9.78516 1.03516C9.51172 1.30859 9.375 1.64062 9.375 2.03125V6.25H2.8125C2.03125 6.25 1.36719 6.52344 0.820312 7.07031C0.273438 7.61719 0 8.28125 0 9.0625V24.0625C0 24.8438 0.273438 25.5078 0.820312 26.0547C1.36719 26.6016 2.03125 26.875 2.8125 26.875H27.1875C27.9688 26.875 28.6328 26.6016 29.1797 26.0547C29.7266 25.5078 30 24.8438 30 24.0625V9.0625C30 8.28125 29.7266 7.61719 29.1797 7.07031C28.6328 6.52344 27.9688 6.25 27.1875 6.25ZM11.25 2.5H18.75V6.25H11.25V2.5ZM28.125 24.0625C28.125 24.3359 28.0273 24.5703 27.832 24.7656C27.6758 24.9219 27.4609 25 27.1875 25H2.8125C2.53906 25 2.30469 24.9219 2.10938 24.7656C1.95313 24.5703 1.875 24.3359 1.875 24.0625V15.625H11.25V17.9688C11.25 18.3594 11.3867 18.6914 11.6602 18.9648C11.9336 19.2383 12.2656 19.375 12.6562 19.375H17.3438C17.7344 19.375 18.0664 19.2383 18.3398 18.9648C18.6133 18.6914 18.75 18.3594 18.75 17.9688V15.625H28.125V24.0625ZM13.125 17.5V15.625H16.875V17.5H13.125ZM28.125 13.75H1.875V9.0625C1.875 8.78906 1.95313 8.57422 2.10938 8.41797C2.30469 8.22266 2.53906 8.125 2.8125 8.125H27.1875C27.4609 8.125 27.6758 8.22266 27.832 8.41797C28.0273 8.57422 28.125 8.78906 28.125 9.0625V13.75Z'
                fill='#F95054'
              />
            </svg>
            Опыт работы
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='text-sm text-zinc-700 transition dark:text-zinc-500'>
              сен 2023 - настоящее время
            </div>
            <div className='text-lg text-zinc-900 transition dark:text-white leading-6 mt-2'>
              Верстальщик сайтов
            </div>
            <div className='text-zinc-700 transition dark:text-zinc-500  text-normal mt-1'>
              Фриланс
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[-56px] mt-10 bg-zinc-100 dark:bg-zinc-900 p-14 flex gap-8 flex-col md:flex-row'>
        <div className='flex flex-col gap-8 w-full  transition'>
          <div className=' text-zinc-800 dark:text-white text-3xl font-medium'>
            Технологический стэк
          </div>
          <div className=''>
            <div className='flex justify-between items-center dark:text-white text-zinc-800'>
              React.js
              <span>70%</span>
            </div>
            <div className='w-full rounded-md bg-slate-300 dark:bg-black mt-2'>
              <span className=' bg-blue-800 h-1.5 rounded-md block w-[70%]'></span>
            </div>
          </div>

          <div className=''>
            <div className='flex justify-between items-center dark:text-white text-zinc-800'>
              JavaScript
              <span>80%</span>
            </div>
            <div className='w-full rounded-md bg-slate-300 dark:bg-black mt-2'>
              <span className='bg-yellow-400 h-1.5 rounded-md block w-[80%]'></span>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between items-center dark:text-white text-zinc-800'>
              HTML
              <span>100%</span>
            </div>
            <div className='w-full rounded-md bg-slate-300 dark:bg-black mt-2'>
              <span className='bg-orange-600 h-1.5 rounded-md block w-[100%]'></span>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-between items-center dark:text-white text-zinc-800'>
              CSS
              <span>95%</span>
            </div>
            <div className='w-full rounded-md bg-slate-300 dark:bg-black mt-2'>
              <span className='bg-blue-500 h-1.5 rounded-md block w-[95%]'></span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full transition'>
          <div className=' text-zinc-800 dark:text-white text-3xl font-medium'>
            Навыки
          </div>
          <div className='flex flex-wrap gap-4'>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              Typescript
            </div>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              Redux-toolkit
            </div>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              React
            </div>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              Vite
            </div>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              TailwindCSS
            </div>
            <div className='py-1 px-4 bg-slate-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-md'>
              Rest API
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
