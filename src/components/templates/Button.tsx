'use client';
import { classNames } from '@/utils/styles';

type Props = {
  children: React.ReactNode;
  style?: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  style = '',
  className = '',
  onClick,
}: Props) {
  let btnStyle = '';

  switch (style) {
    case 'primary':
      btnStyle = classNames(
        'sm:w-auto w-full flex items-center justify-center font-semibold h-12 px-6 rounded-lg border-2 border-transparent',
        `text-white bg-slate-900 hover:text-slate-900 hover:bg-inherit hover:border-slate-900`,
        'dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-200 dark:hover:border-slate-200',
        className
      );
      break;

    default:
      btnStyle = `${className}`;
      break;
  }

  return (
    <button className={`${btnStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}
