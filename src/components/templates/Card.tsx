'use client';
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`md:flex rounded-md border border-gray-200 dark:border-gray-700 dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  );
}
