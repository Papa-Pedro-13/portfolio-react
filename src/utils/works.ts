import sapper from '../../public/Sapper.png';
import store from '../../public/React store.png';
import act from '../../public/ACT.png';
import eplix from '../../public/Eplix.png';
import word from '../../public/5word.png';
import transit from '../../public/My Transit.png';
import podpop from '../../public/podpop.png';
// import podpop from '../../public/.png';
// import podpop from './podpop.png'; Tell webpack this JS file uses this image
export const categories = ['All', 'React', 'Верстка'] as const;
export const works = [
  {
    title: 'Sapper',
    subtitle: 'Игра "Сапёр" на react',
    image: sapper,
    category: categories[1],
    sourceCode: 'https://github.com/Papa-Pedro-13/Sapper',
    //pageUrl: 'https://papa-pedro-13.github.io/Sapper/dist/',
    stack: ['React', 'JavaScript'],
  },
  {
    title: 'React Store',
    subtitle: 'Интернет-магазин на React с Rest API',
    image: store,
    category: categories[1],
    sourceCode: 'https://github.com/Papa-Pedro-13/react-store',
    //pageUrl: 'https://papa-pedro-13.github.io/Sapper/dist/',
    stack: ['React', 'JavaScript', 'RTK Query', 'Redux-Toolkit'],
  },
  {
    title: '5 Word',
    subtitle: 'Игра "5 букв" на react. Есть версия на React Native',
    image: word,
    category: categories[1],
    sourceCode: 'https://github.com/Papa-Pedro-13/5word-game',
    //pageUrl: 'https://papa-pedro-13.github.io/5word-game/dist/',
    stack: ['React', 'TailwindCSS', 'TypeScript', 'React Native'],
  },
  {
    title: 'Podpop',
    subtitle: 'Вёрстка многостраничного интернет-магазина',
    image: podpop,
    category: categories[2],
    sourceCode: 'https://github.com/Papa-Pedro-13/Podpop',
    pageUrl: 'https://papa-pedro-13.github.io/Podpop/dist/',
    stack: ['HTML', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Eplix',
    subtitle: 'Вёрстка интернет-магазина креплений',
    image: eplix,
    category: categories[2],
    sourceCode: 'https://github.com/Papa-Pedro-13/Eplix',
    pageUrl: 'https://papa-pedro-13.github.io/Eplix/dist/',
    stack: ['HTML', 'SCSS', 'JavaScript'],
  },
  {
    title: 'ACT',
    subtitle: 'Многостраничный лендинг сайт фитнесс студии',
    image: act,
    category: categories[2],
    sourceCode: 'https://github.com/Papa-Pedro-13/ACT---fitness-studio',
    pageUrl: 'https://papa-pedro-13.github.io/ACT---fitness-studio/dist/',
    stack: ['HTML', 'SCSS', 'JavaScript'],
  },
  {
    title: 'My Transit',
    subtitle: 'Лендинг-сайт компании грузоперевозок',
    image: transit,
    category: categories[2],
    sourceCode: 'https://github.com/Papa-Pedro-13/MyTransit',
    pageUrl: 'https://papa-pedro-13.github.io/MyTransit/dist/',
    stack: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
  },
];
