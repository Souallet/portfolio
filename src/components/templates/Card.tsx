'use client';
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`md:flex bg-gray-50 rounded-xl p-8 md:p-0 dark:bg-slate-800 ${className}`}
    >
      {children}
    </div>
  );
}
