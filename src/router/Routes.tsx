import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../components/Layout';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';

export const pages = [
  {
    path: '/',
    name: 'Обо мне',
    icon: <AiOutlineUser size={22} />,
    element: <About />,
  },

  {
    path: '/portfolio',
    name: 'Работы',
    icon: <MdOutlineWorkOutline size={22} />,
    element: <Portfolio />,
  },
  {
    path: '/resume',
    name: 'Резюме',
    icon: <FaRegAddressCard size={22} />,
    element: <Resume />,
  },
  {
    path: '/contacts',
    name: 'Контакты',
    icon: <FaRegAddressBook size={22} />,
    element: <Contacts />,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: pages,
  },
]);
