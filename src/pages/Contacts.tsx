import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Headline from '../components/Headline';
import { SERVICES_ID, PUBLIC_KEY, TEMPLATE_ID } from '../utils/constants';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

interface FormState {
  name: string;
  email: string;
  message: string;
}
const initialForm = {
  name: '',
  email: '',
  message: '',
};
const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>(initialForm);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICES_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(
        () => {
          toast.success('Ваша заявка успешно отправлена!');
        },
        (error) => {
          toast.error('Попробуйте попозже!');
          console.log(error);
        }
      )
      .then(() => {
        setFormState(initialForm);
      });
  };

  const onClickHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  return (
    <>
      <Headline title='Контакты' />
      <div className='mt-8 flex flex-col gap-5  dark:text-grays text-zinc-900 transition'>
        <p>
          Я всегда открыт для предложений по работе. Постоянно на связи! <br />
          Напишите мне, если хотите обудить сотрудничество
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
        <div className='text-zinc-700 dark:text-zinc-400 text-sm'>
          Telegram
          <span className='block mt-1 text-zinc-900 dark:text-white text-lg'>
            @Al_ostrovskii
          </span>
        </div>
        <div className='text-zinc-700 dark:text-zinc-400 text-sm'>
          Email
          <span className='block mt-1 text-zinc-900 dark:text-white text-lg'>
            aleksandrostrovsqi@gmail.com
          </span>
        </div>
        <div className='text-zinc-700 dark:text-zinc-400 text-sm'>
          Резюме hh.ru
          <Link
            to={
              'https://spb.hh.ru/resume/fe487769ff0cde24660039ed1f693459546432'
            }
          >
            <span className='block mt-1 text-zinc-900 dark:text-white text-lg'>
              Перейти
            </span>
          </Link>
        </div>
        <div className='text-zinc-700 dark:text-zinc-400 text-sm'>
          Профиль GitHub
          <Link to={'https://github.com/Papa-Pedro-13'}>
            <span className='block mt-1 text-zinc-900 dark:text-white text-lg'>
              Перейти
            </span>
          </Link>
        </div>
        <div className='text-zinc-700 dark:text-zinc-400 text-sm'>
          Vk
          <span className='block mt-1 text-zinc-900 dark:text-white text-lg'>
            vk.com/al_ostrovsqi
          </span>
        </div>
      </div>
      <form
        className='flex flex-col w-full gap-8 mt-16'
        action=''
        ref={form}
        onSubmit={sendEmail}
      >
        <div className='flex flex-col relative'>
          <input
            required
            placeholder=' '
            className='dark:text-white text-zinc-900 peer bg-inherit px-4 py-2 focus:outline-none border-b-[1px] border-zinc-900  dark:border-white'
            type='text'
            value={formState.name}
            onChange={(e) => onClickHandle(e, 'name')}
            name='user_name'
            id='name'
          />
          <label
            className='w-fit absolute top-2 left-4 transition
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            dark:peer-placeholder-shown:text-white
            peer-placeholder-shown:text-zinc-800
            peer-focus:scale-75
            peer-focus:-translate-y-5
            peer-focus:-translate-x-1.5
            dark:peer-focus:text-zinc-500
            peer-focus:text-zinc-600
            dark:text-zinc-500
            text-zinc-600
            transform
            -translate-x-1.5
            scale-75
            -translate-y-5'
            htmlFor='name'
          >
            Name
          </label>
        </div>
        <div className='flex flex-col relative'>
          <input
            required
            placeholder=' '
            className='dark:text-white text-zinc-900 peer bg-inherit px-4 py-2 focus:outline-none border-b-[1px] border-zinc-900  dark:border-white'
            type='email'
            value={formState.email}
            onChange={(e) => onClickHandle(e, 'email')}
            name='user_email'
            id='email'
          />
          <label
            className='
            w-fit absolute top-2 left-4 transition
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            dark:peer-placeholder-shown:text-white
            peer-placeholder-shown:text-zinc-800
            peer-focus:scale-75
            peer-focus:-translate-y-5
            peer-focus:-translate-x-1.5
            dark:peer-focus:text-zinc-500
            peer-focus:text-zinc-600
            dark:text-zinc-500
            text-zinc-600
            transform
            -translate-x-1.5
            scale-75
            -translate-y-5'
            htmlFor='email'
          >
            Email
          </label>
        </div>
        <div className='flex flex-col relative'>
          <textarea
            rows={1}
            required
            placeholder=' '
            className=' resize-none dark:text-white text-zinc-900 peer bg-inherit px-4 py-2 focus:outline-none border-b-[1px] border-zinc-900  dark:border-white'
            id='message'
            name='message'
            value={formState.message}
            onChange={(e) => onClickHandle(e, 'message')}
          />
          <label
            className='
            w-fit absolute top-2 left-4 transition
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            dark:peer-placeholder-shown:text-white
            peer-placeholder-shown:text-zinc-800
            peer-focus:scale-75
            peer-focus:-translate-y-5
            peer-focus:-translate-x-1.5
            dark:peer-focus:text-zinc-500
            peer-focus:text-zinc-600
            dark:text-zinc-500
            text-zinc-600
            transform
            -translate-x-1.5
            scale-75
            -translate-y-5'
            htmlFor='message'
          >
            Message
          </label>
        </div>
        <input
          className='max-w-52 w-full text-center border-2 text-zinc-900 hover:text-white hover:bg-zinc-900 dark:text-white dark:border-white rounded-3xl py-3 px-10  mx-auto cursor-pointer dark:hover:bg-white border-zinc-900 dark:bg-black transition  dark:hover:text-zinc-700'
          type='submit'
          value='Send'
        />
      </form>
    </>
  );
};

export default Contacts;
