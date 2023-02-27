type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainTitle({ children, className = '' }: Props) {
  return (
    <h1
      className={`text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white ${className}`}
    >
      {children}
    </h1>
  );
}
