type Props = {
  children: string;
  className?: string;
};

export default function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-3xl tracking-wide font-semibold text-slate-900  dark:text-white mb-8 ${className}`}
    >
      {children}
    </h2>
  );
}
