type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainTitle({ children, className = '' }: Props) {
  return (
    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-white dark:from-white dark:to-gray-500">
      {children}
    </h1>
  );
}
