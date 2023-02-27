type Props = {
  children: string;
  className?: string;
};

export default function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-center text-slate-900 text-3xl tracking-tight font-extrabold sm:text-5xl dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
}
