import GithubIcon from '@/components/icons/GithubIcon';
import Card from '@/components/templates/Card';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { getSocialPath } from '@/utils/socials';
import { classNames } from '@/utils/styles';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

const navigation = [
  {
    path: '/',
    title: 'Réalisations',
  },
  {
    path: '/',
    title: 'Formations',
  },
  {
    path: '/',
    title: 'Compétences',
  },
  {
    path: '/',
    title: 'Expériences',
  },
  {
    path: '/',
    title: 'Contact',
  },
];

export default function Header() {
  return (
    <header className="py-4 container mx-auto flex justify-between items-center relative z-10">
      <nav className="relative flex flex-wrap items-center justify-between py-6 w-full">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-medium transition-all text-slate-900 focus-visible:ring-1 focus:outline-none hover:font-bold hover:tracking-wide dark:text-gray-300 dark:hover:text-white"
          >
            sébastien.ouallet
          </Link>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
        {/* Desktop Menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
            <NavItems navigation={navigation} mobile={false} />
          </ul>
          <ActionButtons />
        </div>
      </nav>
    </header>
  );
}

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Card className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium dark:text-white">
                Menu
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Card>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div>
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <Card className="flex flex-col rounded-md px-4 py-2 text-sm font-medium dark:text-white divide-y divide-gray-100 opacity-100">
                  <div className="px-1 py-1 ">
                    {navigation.map((item, index) => (
                      <Menu.Item key={index}>
                        <Link
                          href={item?.path ? item.path : '#'}
                          className={classNames(
                            'outline-none transition-all focus-visible:ring-1 focus:outline-none dark:text-gray-300 flex justify-end',
                            'w-full block px-4 py-2 -ml-4 cursor-pointer'
                          )}
                          key={index}
                        >
                          {item.title}
                        </Link>
                      </Menu.Item>
                    ))}
                  </div>
                  <div className="flex w-full pt-4 pb-2 gap-2">
                    <div className="flex-1">
                      <ThemeSwitcher
                        type="toggle"
                        label="Theme"
                        className="flex flex-1 items-center gap-2 rounded-md border p-2 cursor-pointer h-full"
                      />
                    </div>
                    <Link
                      href={getSocialPath('Github')?.name ?? '/'}
                      className="flex flex-1 items-center gap-2 rounded-md border p-2 cursor-pointer"
                      target="_blank"
                    >
                      <GithubIcon /> <span>Github</span>
                    </Link>
                  </div>
                </Card>
              </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const ActionButtons = () => {
  return (
    <div className="mx-4 gap-3 flex items-center">
      <ThemeSwitcher />

      <Link
        href={getSocialPath('Github')?.name ?? '/'}
        className="hover:text-slate-900 dark:hover:text-white dark:text-gray-300 "
        target="_blank"
      >
        <GithubIcon />
      </Link>
    </div>
  );
};

const NavItems = ({
  navigation,
  mobile,
}: {
  navigation: {
    path: string;
    title: string;
  }[];
  mobile: boolean;
}) => {
  return (
    <>
      {navigation.map((item, index) => (
        <Link
          href={item?.path ? item.path : '#'}
          className={classNames(
            'flex justify-end  outline-none transition-all focus-visible:ring-1 focus:outline-none hover:font-bold hover:text-slate-900 dark:text-gray-300 dark:hover:text-white',
            mobile ? 'w-full block px-4 py-2 -ml-4' : 'inline-block px-4 py-2'
          )}
          key={index}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};
