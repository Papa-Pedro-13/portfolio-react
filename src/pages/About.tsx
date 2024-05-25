import { BsFileEarmarkCode } from 'react-icons/bs';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { BiSolidComponent } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import Headline from '../components/Headline';

const About = () => {
  return (
    <div>
      <Headline title={'Обо мне'} />
      <div className='mt-8 flex flex-col gap-5 text-grays'>
        <p>
          Привет! Я, Островский Александр - Frontend-разработчик из
          Санкт-петербурга, работаю в сфере веб-разработки. Мне нравится
          превращать сложные задачи в простые, красивые и полезные проекты.
        </p>

        <p>
          Я владею современным стеком технологий, включая HTML5, CSS3,
          JavaScript (ES6+), React, а также знаком с инструментами сборки
          проектов как Webpack, Vite и Gulp.
        </p>
        <p>
          Ознакомьтесь с моими работами в разделе Портфолио и свяжитесь со мной,
          если вы заинтересованы в сотрудничестве или у вас есть вопросы. С
          нетерпением жду новых интересных задач и проектов!
        </p>
      </div>
      <div className='mt-10  '>
        <div className='text-3xl font-bold text-white'>Чем я занимаюсь</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='flex gap-4'>
              <BsFileEarmarkCode
                size={40}
                className='min-w-10'
                color='yellow'
              />
              <div className=''>
                <div className='text-white font-normal text-xl'>
                  Разработка Single Page Applications (SPA)
                </div>
                <p className='text-grays mt-2'>
                  Я создаю быстрые и отзывчивые одностраничные приложения с
                  использованием React.js
                </p>
              </div>
            </div>
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='flex gap-4'>
              <BiSolidComponent
                className='min-w-10'
                size={40}
                color='blue'
              />
              <div className=''>
                <div className='text-white font-normal text-xl'>
                  Компонентный подход
                </div>
                <p className='text-grays mt-2'>
                  Я стремлюсь к тому, чтобы код был модульным, легко читаемым и
                  поддерживаемым, что позволяет ускорять разработку и упрощать
                  обновление проектов.
                </p>
              </div>
            </div>
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='flex gap-4'>
              <MdOutlineDeveloperMode
                className='min-w-10'
                size={40}
                color='red'
              />
              <div className=''>
                <div className='text-white font-normal text-xl'>
                  Адаптивный дизайн
                </div>
                <p className='text-grays mt-2'>
                  Создание адаптивных веб-интерфейсов, которые идеально
                  отображаются на устройствах любого размера – от мобильных
                  телефонов до больших экранов.
                </p>
              </div>
            </div>
          </div>
          <div className='border-[#212425] border-solid border-[1px] rounded-xl p-5 '>
            <div className='flex gap-4'>
              <FaCode
                className='min-w-10'
                size={40}
                color='green'
              />
              <div className=''>
                <div className='text-white font-normal text-xl'>
                  Работа с RESTful API
                </div>
                <p className='text-grays mt-2'>
                  Используя последние версии React, включая хуки и новый
                  контекст, асинхронные запросы а также Redux для хранения
                  состояния
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
