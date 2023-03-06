'use client';

import { Listbox, Transition } from '@headlessui/react';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState } from 'react';

type Theme = {
  label: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
};

const themes: Theme[] = [
  {
    label: 'Clair',
    name: 'light',
    icon: SunIcon,
  },
  {
    label: 'Sombre',
    name: 'dark',
    icon: MoonIcon,
  },
  {
    label: 'Système',
    name: 'system',
    icon: ComputerDesktopIcon,
  },
];

type Props = {
  type?: 'toggle' | 'select';
  label?: string;
  className?: string;
};

export default function ThemeSwitcher({
  type = 'select',
  label = '',
  className = '',
}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<Boolean>(false);
  const [selected, setSelected] = useState(
    themes.find((t) => {
      if (theme === 'system' && type === 'toggle') {
        return t.name === systemTheme;
      }
      return t.name === theme;
    })
  );

  const selectTheme = (t: Theme): void => {
    setTheme(t.name);
    setSelected(t);
  };

  const toggleTheme = (t: Theme | undefined): void => {
    if (t === undefined) {
      t = {
        label: 'Système',
        name: 'system',
        icon: ComputerDesktopIcon,
      };
    }

    setTheme(t.name);
    setSelected(t);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !selected) {
    return null;
  }

  if (type === 'toggle') {
    return (
      <button
        onClick={() =>
          toggleTheme(themes.find((t) => t.name !== 'system' && t !== selected))
        }
        className={className}
      >
        <selected.icon className="h-5 w-5" aria-hidden="true" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Listbox value={selected} onChange={selectTheme}>
      <div className="relative">
        <Listbox.Button className="flex items-center">
          <selected.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-start text-sm font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 mt-8">
            {themes.map((theme, themeIdx) => (
              <Listbox.Option
                key={themeIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-slate-50 dark:bg-slate-600/30' : ''
                  }`
                }
                value={theme}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {theme.label}
                    </span>

                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <theme.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
