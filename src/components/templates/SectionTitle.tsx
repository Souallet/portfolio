type Props = {
  children: string;
  className?: string;
};

export default function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-center text-slate-900 text-4xl tracking-tight font-extrabold dark:text-white mb-8 ${className}`}
    >
      {children}
    </h2>
  );
}
